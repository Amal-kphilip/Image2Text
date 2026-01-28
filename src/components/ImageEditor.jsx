import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

export function ImageEditor({ src, onSave, onCancel }) {
    const cropperRef = useRef(null);

    const handleRotateLeft = () => {
        const graphics = cropperRef.current?.cropper;
        if (graphics) {
            graphics.rotate(-90);
        }
    };

    const handleRotateRight = () => {
        const graphics = cropperRef.current?.cropper;
        if (graphics) {
            graphics.rotate(90);
        }
    };

    const handleReset = () => {
        const graphics = cropperRef.current?.cropper;
        if (graphics) {
            graphics.reset();
        }
    };

    const handleSave = () => {
        const graphics = cropperRef.current?.cropper;
        if (graphics) {
            const croppedCanvas = graphics.getCroppedCanvas();
            if (croppedCanvas) {
                const croppedImage = croppedCanvas.toDataURL();
                onSave(croppedImage);
            }
        }
    };

    return (
        <div className="editor-overlay">
            <div className="editor-modal">
                <div className="editor-header">
                    <h3>Edit Image</h3>
                </div>

                <div className="editor-body">
                    <Cropper
                        src={src}
                        style={{ height: 400, width: '100%' }}
                        initialAspectRatio={NaN} // Free form
                        guides={true}
                        ref={cropperRef}
                        viewMode={1}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                    />
                </div>

                <div className="editor-toolbar">
                    <div className="tools-group">
                        <button className="tool-btn" onClick={handleRotateLeft} title="Rotate Left">↩️</button>
                        <button className="tool-btn" onClick={handleRotateRight} title="Rotate Right">↪️</button>
                        <button className="tool-btn" onClick={handleReset} title="Reset">Reset</button>
                    </div>

                    <div className="action-group-editor">
                        <button className="cancel-btn" onClick={onCancel}>Cancel</button>
                        <button className="save-btn" onClick={handleSave}>Done</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
