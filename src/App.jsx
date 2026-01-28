import { useState, useEffect, useCallback } from 'react';
import { Controls } from './components/Controls';
import { OutputDisplay } from './components/OutputDisplay';
import { Toast } from './components/Toast';
import { ImageProcessor, ASCII_SETS } from './core/imageProcessor';
import { TextProcessor } from './core/textProcessor';
import { fontNames } from './core/fonts';
import './index.css';

function App() {
  const [file, setFile] = useState(null);
  const [imgElement, setImgElement] = useState(null);
  const [text, setText] = useState('');

  // Mode State
  const [inputMode, setInputMode] = useState('image'); // 'image' | 'text'

  // Image Controls
  const [width, setWidth] = useState(50);
  const [mode, setMode] = useState('ascii'); // Default to ascii mostly

  // Filters
  const [brightness, setBrightness] = useState(1.0);
  const [contrast, setContrast] = useState(1.0);
  const [saturation, setSaturation] = useState(1.0);
  const [grayscale, setGrayscale] = useState(0);
  const [sepia, setSepia] = useState(0);
  const [hue, setHue] = useState(0);
  const [invert, setInvert] = useState(false);

  // Advanced
  const [dithering, setDithering] = useState('None');
  const [charSet, setCharSet] = useState('Normal');
  const [threshold, setThreshold] = useState(128);

  // Text Controls
  const [textInput, setTextInput] = useState('MESSI');
  const [selectedFont, setSelectedFont] = useState('Standard');

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

  // Process Content (Image or Text)
  useEffect(() => {
    if (inputMode === 'image') {
      if (imgElement) {
        const result = ImageProcessor.process(imgElement, {
          width,
          mode,
          // Filters
          brightness,
          contrast,
          saturation,
          grayscale,
          sepia,
          hue,
          invert,
          // Advanced
          dithering,
          charSet,
          threshold
        });
        setText(result);
      }
    } else {
      // Text Mode
      TextProcessor.process(textInput, selectedFont).then(result => {
        setText(result);
      });
    }
  }, [
    inputMode, imgElement,
    width, mode,
    brightness, contrast, saturation, grayscale, sepia, hue, invert,
    dithering, charSet, threshold,
    textInput, selectedFont
  ]);

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
        inputMode={inputMode} setInputMode={setInputMode}
        textInput={textInput} setTextInput={setTextInput}
        font={selectedFont} setFont={setSelectedFont}
        fontOptions={fontNames}

        // Image Props
        width={width} setWidth={setWidth}
        mode={mode} setMode={setMode}

        brightness={brightness} setBrightness={setBrightness}
        contrast={contrast} setContrast={setContrast}
        saturation={saturation} setSaturation={setSaturation}
        grayscale={grayscale} setGrayscale={setGrayscale}
        sepia={sepia} setSepia={setSepia}
        hue={hue} setHue={setHue}
        invert={invert} setInvert={setInvert}

        dithering={dithering} setDithering={setDithering}
        charSet={charSet} setCharSet={setCharSet}
        asciiSets={Object.keys(ASCII_SETS)}
        threshold={threshold} setThreshold={setThreshold}

        onCopy={copyToClipboard}
      />
      <OutputDisplay text={text} />
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}

export default App;
