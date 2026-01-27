import React from 'react';

export function OutputDisplay({ text }) {
    return (
        <div className="output-panel">
            <div className="output-container">
                {text ? (
                    <pre>{text}</pre>
                ) : (
                    <div className="placeholder">
                        <p>Select an image to convert.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
