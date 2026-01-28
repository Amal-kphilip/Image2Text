
import figlet from 'figlet';
import { fontMap } from './fonts';

// Pre-load all fonts (synchronous since we have them as strings)
// In a larger app we might load them on demand, but strings are cheap here.
Object.entries(fontMap).forEach(([name, fontData]) => {
    figlet.parseFont(name, fontData);
});

export const TextProcessor = {
    /**
     * Converts text to ASCII art using the specified font.
     * @param {string} text - The input text.
     * @param {string} fontName - The name of the font to use.
     * @returns {Promise<string>} - The generated ASCII art.
     */
    process: (text, fontName) => {
        return new Promise((resolve, reject) => {
            if (!fontMap[fontName]) {
                // Fallback to Standard if not found, or error
                fontName = 'Standard';
            }

            figlet.text(text, { font: fontName }, (err, data) => {
                if (err) {
                    console.error('Figlet error:', err);
                    resolve('Error producing text art');
                } else {
                    resolve(data);
                }
            });
        });
    }
};
