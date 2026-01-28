import React from 'react';

export function Controls({
    inputMode, setInputMode,
    textInput, setTextInput,
    font, setFont,
    fontOptions = [],
    onFileChange,

    // Image Props
    width, setWidth,
    mode, setMode,
    invert, setInvert,
    threshold, setThreshold, // Kept for Backwards Compat / Braille

    // New Image Props
    brightness, setBrightness,
    contrast, setContrast,
    saturation, setSaturation,
    grayscale, setGrayscale,
    sepia, setSepia,
    hue, setHue,
    dithering, setDithering,
    charSet, setCharSet,
    asciiSets = [],

    onCopy
}) {
    const handleReset = () => {
        setBrightness(1.0);
        setContrast(1.0);
        setSaturation(1.0);
        setGrayscale(0);
        setSepia(0);
        setHue(0);
        setInvert(false);
        setDithering('None');
        setCharSet('Normal');
        setWidth(50);
    };

    return (
        <div className="controls-panel">
            <div className="logo-area">
                <h2>Img2Text</h2>
                <span className="badge">Pro</span>
            </div>

            <div className="control-group">
                <div className="input-mode-tabs">
                    <button
                        className={`tab-btn ${inputMode === 'image' ? 'active' : ''}`}
                        onClick={() => setInputMode('image')}
                    >
                        Image to Text
                    </button>
                    <button
                        className={`tab-btn ${inputMode === 'text' ? 'active' : ''}`}
                        onClick={() => setInputMode('text')}
                    >
                        Text to Art
                    </button>
                </div>
            </div>

            {inputMode === 'image' ? (
                <>
                    <div className="control-group">
                        <label className="file-upload-btn">
                            Upload Image
                            <input type="file" accept="image/*" onChange={onFileChange} />
                        </label>
                    </div>

                    {/* Mode Selector */}
                    <div className="control-group">
                        <label>Conversion Mode</label>
                        <select
                            className="font-select"
                            value={mode}
                            onChange={(e) => setMode(e.target.value)}
                        >
                            <option value="ascii">Classic ASCII</option>
                            <option value="block">Block Cartoons</option>
                            <option value="braille">Braille (Detail)</option>
                        </select>
                    </div>

                    {/* Basic Grid */}
                    <div className="control-group">
                        <label>Width: {width} chars</label>
                        <input type="range" min="10" max="200" value={width} onChange={(e) => setWidth(Number(e.target.value))} />
                    </div>

                    {/* ASCII Gradient Select */}
                    {mode === 'ascii' && (
                        <div className="control-group">
                            <label>ASCII Gradient</label>
                            <select
                                className="font-select"
                                value={charSet}
                                onChange={(e) => setCharSet(e.target.value)}
                            >
                                {asciiSets.map(set => (
                                    <option key={set} value={set}>{set}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Filters - Accordion or just list? List for now as user asked for settings to be visible */}
                    <div className="settings-grid">
                        <div className="control-group compact">
                            <label>Brightness: {Math.round(brightness * 100)}%</label>
                            <input type="range" min="0" max="3" step="0.1" value={brightness} onChange={(e) => setBrightness(Number(e.target.value))} />
                        </div>
                        <div className="control-group compact">
                            <label>Contrast: {Math.round(contrast * 100)}%</label>
                            <input type="range" min="0" max="3" step="0.1" value={contrast} onChange={(e) => setContrast(Number(e.target.value))} />
                        </div>
                        <div className="control-group compact">
                            <label>Saturation: {Math.round(saturation * 100)}%</label>
                            <input type="range" min="0" max="3" step="0.1" value={saturation} onChange={(e) => setSaturation(Number(e.target.value))} />
                        </div>
                        <div className="control-group compact">
                            <label>Hue: {hue}°</label>
                            <input type="range" min="0" max="360" value={hue} onChange={(e) => setHue(Number(e.target.value))} />
                        </div>
                        <div className="control-group compact">
                            <label>Grayscale: {Math.round(grayscale * 100)}%</label>
                            <input type="range" min="0" max="1" step="0.1" value={grayscale} onChange={(e) => setGrayscale(Number(e.target.value))} />
                        </div>
                        <div className="control-group compact">
                            <label>Sepia: {Math.round(sepia * 100)}%</label>
                            <input type="range" min="0" max="1" step="0.1" value={sepia} onChange={(e) => setSepia(Number(e.target.value))} />
                        </div>
                    </div>

                    <div className="control-group">
                        <label>
                            <input type="checkbox" checked={invert} onChange={(e) => setInvert(e.target.checked)} />
                            Invert Colors
                        </label>
                    </div>

                    {/* Advanced Dithering */}
                    {(mode === 'ascii' || mode === 'block') && (
                        <div className="control-group">
                            <label>Dithering</label>
                            <select
                                className="font-select"
                                value={dithering}
                                onChange={(e) => setDithering(e.target.value)}
                            >
                                <option value="None">None</option>
                                <option value="Floyd-Steinberg">Floyd-Steinberg</option>
                                <option value="Atkinson">Atkinson</option>
                            </select>
                        </div>
                    )}

                    {/* Legacy Threshold for Braille/Block if needed */}
                    {mode === 'braille' && (
                        <div className="control-group">
                            <label>Dot Threshold: {threshold}</label>
                            <input type="range" min="0" max="255" value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} />
                        </div>
                    )}

                    <button className="reset-btn" onClick={handleReset}>Reset Filters</button>

                </>
            ) : (
                <>
                    <div className="control-group">
                        <label>Text Input</label>
                        <input
                            type="text"
                            className="text-input-field"
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                            placeholder="Enter text..."
                            maxLength={30}
                        />
                    </div>

                    <div className="control-group">
                        <label>Font Style</label>
                        <select
                            className="font-select"
                            value={font}
                            onChange={(e) => setFont(e.target.value)}
                        >
                            {fontOptions.map(f => (
                                <option key={f} value={f}>{f}</option>
                            ))}
                        </select>
                    </div>
                </>
            )}

            <div className="control-group action-group">
                <button className="copy-btn" onClick={onCopy}>
                    Copy to Clipboard
                </button>
            </div>
        </div>
    );
}
