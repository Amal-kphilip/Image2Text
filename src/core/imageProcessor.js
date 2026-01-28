/**
 * Image Processing Core Logic
 * Handles image resizing, filtering, and conversion to text art.
 */

export const ASCII_SETS = {
    'Normal': [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@'],
    'Normal 2': ['@', '%', '#', '*', '+', '=', '-', ':', '.', ' '], // Inverted order of Normal essentially
    'Minimalist': [' ', '.', '*', '#'],
    'Gray Scale': [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@', '8', '&', '$', 'W', 'M'],
    'Extended High': [' ', '.', ',', '-', ':', ';', '=', '+', '*', '#', '%', '&', '@', '$'],
    'Alphabetic': [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    'Alphanumeric': [' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    'Math Symbols': [' ', '+', '-', '=', '*', '/', '<', '>', '(', ')', '[', ']', '{', '}'],
    'Arrow': [' ', '↑', '↗', '→', '↘', '↓', '↙', '←', '↖'],
    'Code Page 437': [' ', '░', '▒', '▓', '█'],
    'Black and White': [' ', '@'],
    'Numerical': [' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
};

export const ImageProcessor = {
    /**
     * Processes an image and converts it to the specified text format.
     */
    process: (image, options) => {
        const {
            width = 50,
            mode = 'ascii',
            charSet = 'Normal',
            // Filters
            brightness = 1.0,
            contrast = 1.0,
            saturation = 1.0,
            grayscale = 0,
            sepia = 0,
            hue = 0,
            invert = false,
            // Advanced
            dithering = 'None',
            threshold = 128
        } = options;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Calculate dimensions
        const aspectRatio = image.height / image.width;

        let sW, sH, fW, fH;

        if (mode === 'braille') {
            // Braille logic (keep existing rough logic)
            fW = width;
            fH = Math.round(width * aspectRatio * 0.5);
            sW = width * 2;
            sH = fH * 4;
        } else {
            // ASCII / Block
            fW = width;
            // Font aspect ratio correction (assuming ~0.5)
            fH = Math.round(width * aspectRatio * 0.5);
            sW = fW;
            sH = fH;
        }

        sW = Math.max(1, sW);
        sH = Math.max(1, sH);

        canvas.width = sW;
        canvas.height = sH;

        // Apply Filters via Context
        // Order: Grayscale -> Sepia -> Hue -> Brightness -> Contrast -> Saturate -> Invert
        let filterString = `brightness(${brightness * 100}%) contrast(${contrast * 100}%) saturate(${saturation * 100}%) grayscale(${grayscale * 100}%) sepia(${sepia * 100}%) hue-rotate(${hue}deg)`;
        if (invert) filterString += ` invert(100%)`;

        ctx.filter = filterString;
        ctx.drawImage(image, 0, 0, sW, sH);
        ctx.filter = 'none'; // reset

        const imageData = ctx.getImageData(0, 0, sW, sH);

        // Dithering (modifies imageData in place)
        if (dithering !== 'None' && mode !== 'braille') {
            applyDithering(imageData, dithering);
        }

        // Convert
        const pixels = new Uint8Array(sW * sH);
        for (let i = 0; i < imageData.data.length; i += 4) {
            // Simple luma since filters are already applied
            // Note: If we dithered, the pixels are already discrete-ish, but we still map them.
            // But usually dithering makes sense for B/W or limited palette.
            // For ASCII, we map 0-255 to indices.
            const r = imageData.data[i];
            const g = imageData.data[i + 1];
            const b = imageData.data[i + 2];
            pixels[i / 4] = (r + g + b) / 3;
        }

        if (mode === 'braille') {
            return convertToBraille(pixels, sW, sH, fW, fH, threshold, invert); // Params slightly different
        } else if (mode === 'block') {
            // Use "Code Page 437" or similar for Block
            const set = ASCII_SETS['Code Page 437'];
            return convertToAscii(pixels, sW, sH, set);
        } else {
            const set = ASCII_SETS[charSet] || ASCII_SETS['Normal'];
            return convertToAscii(pixels, sW, sH, set);
        }
    }
};

/**
 * Dithering Algorithms
 * Operates on the RGBA data directly to spread quantization error.
 * For grayscale processing, we just dither the RGB channels equally.
 */
function applyDithering(imageData, type) {
    const w = imageData.width;
    const h = imageData.height;
    const data = imageData.data;

    // Helper to get pixel index
    const idx = (x, y) => (y * w + x) * 4;

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const i = idx(x, y);
            const oldR = data[i];

            // Quantize to Black/White (0 or 255) because ASCII usually works best with high contrast for dithering results?
            // Or quantize to nearest "step" if we have 10 chars?
            // Standard Floyd-Steinberg is often for 1-bit B/W. 
            // Let's assume binary thresholding for dithering effect, mapped to 0 or 255.
            const newR = oldR < 128 ? 0 : 255;

            data[i] = newR;
            data[i + 1] = newR;
            data[i + 2] = newR;

            const err = oldR - newR;

            const distribute = (dx, dy, factor) => {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                    const ni = idx(nx, ny);
                    const val = data[ni] + err * factor;
                    const clamped = Math.min(255, Math.max(0, val));
                    data[ni] = clamped;
                    data[ni + 1] = clamped;
                    data[ni + 2] = clamped;
                }
            };

            if (type === 'Floyd-Steinberg') {
                distribute(1, 0, 7 / 16);
                distribute(-1, 1, 3 / 16);
                distribute(0, 1, 5 / 16);
                distribute(1, 1, 1 / 16);
            } else if (type === 'Atkinson') {
                distribute(1, 0, 1 / 8);
                distribute(2, 0, 1 / 8);
                distribute(-1, 1, 1 / 8);
                distribute(0, 1, 1 / 8);
                distribute(1, 1, 1 / 8);
                distribute(0, 2, 1 / 8);
            }
        }
    }
}


function convertToBraille(pixels, sW, sH, fW, fH, threshold, invert) {
    let output = '';
    // Braille uses a fixed dot pattern logic, independent of "Char Sets"
    // We already have this logic.
    // ... Re-implementing concise version ...
    for (let y = 0; y < fH; y++) {
        for (let x = 0; x < fW; x++) {
            let charCode = 0x2800;
            const startX = x * 2;
            const startY = y * 4;
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
                    // If we inverted earlier via filter, 'val' is already inverted.
                    // But our 'invert' param came from UI.
                    // If we used ctx.filter='invert(100%)', then high val = dark (originally).
                    // Braille: Dot present if val > threshold?
                    // Let's assume ctx.filter handled the visual inversion.
                    // So we just check intensity.
                    if (val >= threshold) {
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

function convertToAscii(pixels, w, h, chars) {
    let output = '';
    const len = chars.length;
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const val = pixels[y * w + x];
            const index = Math.floor((val / 256) * len);
            output += chars[Math.min(index, len - 1)];
        }
        output += '\n';
    }
    return output;
}
