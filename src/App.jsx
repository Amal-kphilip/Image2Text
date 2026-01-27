import { useState, useEffect, useCallback } from 'react';
import { Controls } from './components/Controls';
import { OutputDisplay } from './components/OutputDisplay';
import { Toast } from './components/Toast';
import { ImageProcessor } from './core/imageProcessor';
import './index.css';

function App() {
  const [file, setFile] = useState(null);
  const [imgElement, setImgElement] = useState(null);
  const [text, setText] = useState('');

  // Controls
  const [width, setWidth] = useState(30);
  const [mode, setMode] = useState('braille');
  const [contrast, setContrast] = useState(1.0);
  const [threshold, setThreshold] = useState(128);
  const [invert, setInvert] = useState(false);

  const [toast, setToast] = useState(null);

  // Load image when file changes
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setImgElement(img);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  // Process image when dependencies change
  useEffect(() => {
    if (imgElement) {
      const result = ImageProcessor.process(imgElement, {
        width,
        mode,
        contrast,
        threshold,
        invert
      });
      setText(result);
    }
  }, [imgElement, width, mode, contrast, threshold, invert]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const copyToClipboard = async () => {
    if (!text) {
      setToast("Nothing to copy!");
      return;
    }
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setToast("Copied to clipboard!");
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch (err) {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setToast("Copied to clipboard!");
      } catch (e) {
        setToast("Failed to copy.");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="app-container">
      <Controls
        onFileChange={handleFileChange}
        width={width} setWidth={setWidth}
        mode={mode} setMode={setMode}
        contrast={contrast} setContrast={setContrast}
        threshold={threshold} setThreshold={setThreshold}
        invert={invert} setInvert={setInvert}
        onCopy={copyToClipboard}
      />
      <OutputDisplay text={text} />
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}

export default App;
