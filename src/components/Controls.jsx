import React from 'react';

export function Controls({
    onFileChange,
    width, setWidth,
    mode, setMode,
    contrast, setContrast,
    threshold, setThreshold,
    invert, setInvert,
    onCopy
}) {
    return (
        <div className="controls-panel">
            <div className="logo-area">
                <h2>Img2Text</h2>
                <span className="badge">Social Edition</span>
            </div>

            <div className="control-group">
                <label className="file-upload-btn">
                    Upload Image
                    <input type="file" accept="image/*" onChange={onFileChange} />
                </label>
            </div>

            <div className="control-group">
                <label>Mode</label>
                <div className="mode-selector">
                    {['braille', 'block', 'ascii'].map(m => (
                        <button
                            key={m}
                            className={`mode-btn ${mode === m ? 'active' : ''}`}
                            onClick={() => setMode(m)}
                        >
                            {m.charAt(0).toUpperCase() + m.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="control-group">
                <label>Width: {width} chars</label>
                <input
                    type="range"
                    min="10"
                    max="100"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                />
            </div>

            <div className="control-group">
                <label>Contrast: {contrast.toFixed(1)}</label>
                <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={contrast}
                    onChange={(e) => setContrast(Number(e.target.value))}
                />
            </div>

            {mode !== 'ascii' && (
                <div className="control-group">
                    <label>Threshold: {threshold}</label>
                    <input
                        type="range"
                        min="0"
                        max="255"
                        value={threshold}
                        onChange={(e) => setThreshold(Number(e.target.value))}
                    />
                </div>
            )}

            <div className="control-group checkbox-group">
                <label>
                    Invert Colors
                    <input
                        type="checkbox"
                        checked={invert}
                        onChange={(e) => setInvert(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="control-group action-group">
                <button className="copy-btn" onClick={onCopy}>
                    Copy to Clipboard
                </button>
            </div>
        </div>
    );
}
