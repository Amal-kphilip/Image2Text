/**
 * Image Processing Core Logic
 * Handles image resizing and conversion to text art (Braille, Block, ASCII).
 * Designed to be reusable in both React and Vanilla JS environments.
 */

// Braille dot mapping (standard 8-dot Braille)
// 1 4
// 2 5
// 3 6
// 7 8
const BRAILLE_MAP = [
    [0, 1, 0x1],  // Row 1, Col 1 -> Dot 1
    [0, 2, 0x2],  // Row 2, Col 1 -> Dot 2
    [0, 3, 0x4],  // Row 3, Col 1 -> Dot 3
    [1, 1, 0x8],  // Row 1, Col 2 -> Dot 4
    [1, 2, 0x10], // Row 2, Col 2 -> Dot 5
    [1, 3, 0x20], // Row 3, Col 2 -> Dot 6
    [0, 4, 0x40], // Row 4, Col 1 -> Dot 7
    [1, 4, 0x80]  // Row 4, Col 2 -> Dot 8
];

// Block characters (Dark to Light)
const BLOCK_CHARS = [' ', '░', '▒', '▓', '█'];
// ASCII characters (Dark to Light)
// Detailed: .:-=+*#%@
const ASCII_CHARS = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@'];

export const ImageProcessor = {
    /**
     * Processes an image and converts it to the specified text format.
     * @param {HTMLImageElement} image - The source image.
     * @param {Object} options - Configuration options.
     * @param {number} options.width - Target width in characters.
     * @param {string} options.mode - 'braille', 'block', 'ascii'.
     * @param {number} options.contrast - Contrast adjustment (0.5 to 2.0, default 1.0).
     * @param {number} options.threshold - Threshold for binary/block text (0-255).
     * @param {boolean} options.invert - Whether to invert the output.
     * @returns {string} The generated text art.
     */
    process: (image, options) => {
        const { width = 30, mode = 'braille', contrast = 1.0, threshold = 128, invert = false } = options;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Calculate dimensions
        const aspectRatio = image.height / image.width;

        let sampleWidth, sampleHeight;
        let finalWidth = width;
        let finalHeight;

        if (mode === 'braille') {
            // Braille: 2x4 pixels per character
            // To preserve aspect ratio with 1:2 font ratio (common):
            // Each char is roughly 1 unit wide, 2 units high.
            // But it contains 2 dots wide, 4 dots high.
            // So dots are roughly square.
            // We need sample width = width * 2
            // We need sample height = width * aspectRatio * (gridH/gridW) * (charW/charH) ???
            // Let's stick to the pixel mapping logic:
            // Text Width = W chars => 2W pixels
            // Text Height = H chars => 4H pixels
            // We want (2W) / (4H) approx= image aspect (W_img / H_img)
            // W/2H = aspect
            // H = W / (2 * aspect) -- This would be if pixels were not square or something?
            // Wait. W_img / H_img = (W_chars * Char_Width_px) / (H_chars * Char_Height_px)
            // If Char is 10x20 (1:2), then W_img/H_img = (W_c * 10) / (H_c * 20) = 0.5 * W_c/H_c
            // H_c = 0.5 * W_c * (H_img / W_img)

            finalHeight = Math.round(width * aspectRatio * 0.5);
            sampleWidth = width * 2;
            sampleHeight = finalHeight * 4;
        } else {
            // Block/ASCII: 1 pixel per character (conceptually)
            // Usually fonts are ~1:2
            // So we need to sample vertical resolution at half the horizontal resolution to look right?
            // Or just calculate char height.
            // H_c = W_c * aspect * (CharW/CharH)
            // H_c = W_c * aspect * 0.5
            finalHeight = Math.round(width * aspectRatio * 0.5);
            sampleWidth = width;
            sampleHeight = finalHeight;
        }

        // Ensure at least 1x1
        sampleWidth = Math.max(1, sampleWidth);
        sampleHeight = Math.max(1, sampleHeight);

        canvas.width = sampleWidth;
        canvas.height = sampleHeight;

        // Draw and Resize
        ctx.drawImage(image, 0, 0, sampleWidth, sampleHeight);

        // Get Data
        const imageData = ctx.getImageData(0, 0, sampleWidth, sampleHeight);
        const data = imageData.data;

        // Optional: Pre-calculate luma/contrast
        const pixels = new Uint8Array(sampleWidth * sampleHeight);
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i];
            let g = data[i + 1];
            let b = data[i + 2];

            // Contrast
            if (contrast !== 1.0) {
                const factor = (259 * (contrast * 255 + 255)) / (255 * (259 - contrast * 255));
                r = Math.min(255, Math.max(0, factor * (r - 128) + 128));
                g = Math.min(255, Math.max(0, factor * (g - 128) + 128));
                b = Math.min(255, Math.max(0, factor * (b - 128) + 128));
            }

            // Grayscale (Luminance)
            const luma = 0.299 * r + 0.587 * g + 0.114 * b;
            pixels[i / 4] = luma;
        }

        if (mode === 'braille') {
            return convertToBraille(pixels, sampleWidth, sampleHeight, finalWidth, finalHeight, threshold, invert);
        } else if (mode === 'block') {
            return convertToBlock(pixels, sampleWidth, sampleHeight, finalWidth, threshold, invert);
        } else {
            return convertToAscii(pixels, sampleWidth, sampleHeight, finalWidth, invert);
        }
    }
};

function convertToBraille(pixels, sW, sH, w, h, threshold, invert) {
    let output = '';
    // Iterate through "characters"
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            let charCode = 0x2800;
            // Map dots
            // Braille is 2 columns, 4 rows per char
            // Sample coords: sx = x*2, sy = y*4
            const startX = x * 2;
            const startY = y * 4;

            // Define dots offsets: (dx, dy, bit)
            // Dot 1: (0,0) -> 0x1
            // Dot 2: (0,1) -> 0x2
            // Dot 3: (0,2) -> 0x4
            // Dot 4: (1,0) -> 0x8
            // Dot 5: (1,1) -> 0x10
            // Dot 6: (1,2) -> 0x20
            // Dot 7: (0,3) -> 0x40
            // Dot 8: (1,3) -> 0x80

            const dots = [
                { dx: 0, dy: 0, v: 0x1 }, { dx: 0, dy: 1, v: 0x2 }, { dx: 0, dy: 2, v: 0x4 },
                { dx: 1, dy: 0, v: 0x8 }, { dx: 1, dy: 1, v: 0x10 }, { dx: 1, dy: 2, v: 0x20 },
                { dx: 0, dy: 3, v: 0x40 }, { dx: 1, dy: 3, v: 0x80 }
            ];

            for (const d of dots) {
                const px = startX + d.dx;
                const py = startY + d.dy;
                if (px < sW && py < sH) {
                    const val = pixels[py * sW + px];
                    const isSet = invert ? (val < threshold) : (val >= threshold);
                    // Default: Bright = Dot? 
                    // Usually Text is "Dark" on "Light" background => Dots are black.
                    // But in Dark Mode (social media), background is dark, text is light.
                    // So "Bright" pixel should = Dot.
                    // So if val >= threshold, Set Dot.

                    if (isSet) {
                        charCode += d.v;
                    }
                }
            }
            output += String.fromCharCode(charCode);
        }
        output += '\n';
    }
    return output;
}

function convertToBlock(pixels, w, h, charsW, threshold, invert) {
    let output = '';
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const val = pixels[y * w + x];
            // Map 0-255 to BLOCK_CHARS indices
            // Invert: 255->0
            let normalized = invert ? (255 - val) : val;

            // 5 chars: ' ', '░', '▒', '▓', '█'
            // ' ' is light (0 intensity usually means black in images, but ' ' is empty space).
            // Wait. High intensity = White = '█' (Full block)? 
            // Or Low intensity = Black = '█'?
            // On dark background (Web/Terminal): ' ' is Black (bg), '█' is White (fg).
            // So High Pixel Value => '█'.

            const index = Math.floor((normalized / 256) * BLOCK_CHARS.length);
            const char = BLOCK_CHARS[Math.min(index, BLOCK_CHARS.length - 1)];
            output += char;
        }
        output += '\n';
    }
    return output;
}

function convertToAscii(pixels, w, h, charsW, invert) {
    let output = '';
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const val = pixels[y * w + x];
            let normalized = invert ? (255 - val) : val;
            // Map to ASCII_CHARS
            const index = Math.floor((normalized / 256) * ASCII_CHARS.length);
            const char = ASCII_CHARS[Math.min(index, ASCII_CHARS.length - 1)];
            output += char;
        }
        output += '\n';
    }
    return output;
}
