import { useState, useEffect, useCallback } from 'react';
import { Controls } from './components/Controls';
import { OutputDisplay } from './components/OutputDisplay';
import { Toast } from './components/Toast';
import { ImageEditor } from './components/ImageEditor';
import { ImageProcessor, ASCII_SETS } from './core/imageProcessor';
import { TextProcessor } from './core/textProcessor';
import { fontNames } from './core/fonts';
import './index.css';

function App() {
  const [file, setFile] = useState(null);
  const [imgElement, setImgElement] = useState(null);
  const [text, setText] = useState('');

  // Editor State
  const [isEditing, setIsEditing] = useState(false);
  const [originalImage, setOriginalImage] = useState(null); // The raw file as data URL to pass to editor
  const [editorSource, setEditorSource] = useState(null); // What to show in editor

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
        const result = e.target.result;
        setOriginalImage(result); // Keep original
        setEditorSource(result);

        const img = new Image();
        img.onload = () => {
          setImgElement(img);
        };
        img.src = result;
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

  const startEditing = () => {
    if (originalImage) {
      setIsEditing(true);
    } else {
      setToast("Upload an image first!");
    }
  };

  const handleEditSave = (newImageSrc) => {
    // Create new img element from cropped/edited result
    const img = new Image();
    img.onload = () => {
      setImgElement(img);
      setIsEditing(false);
      // Set this as the new "source" for future edits? 
      // Usually better to keep editing from the current state if user clicks edit again?
      // Or always edit original? 
      // User asked "rotate it as they fix".
      // If I crop, then rotate, I expect to rotate the cropped version.
      setEditorSource(newImageSrc);
    };
    img.src = newImageSrc;
  };

  const handleEditCancel = () => {
    setIsEditing(false);
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

  const handleSaveAsTxt = () => {
    if (!text) return;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ascii-art.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setToast("Saved as ascii-art.txt");
  };

  const handleSaveAsPng = () => {
    if (!text) return;

    // Create an off-screen canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Parse lines
    const lines = text.split('\n');

    // Font settings
    const fontSize = 14;
    const lineHeight = 14;
    const fontFamily = 'Courier New, monospace';

    ctx.font = `${fontSize}px ${fontFamily}`;

    // Measure width
    let maxWidth = 0;
    lines.forEach(line => {
      const metrics = ctx.measureText(line);
      if (metrics.width > maxWidth) maxWidth = metrics.width;
    });

    // Dimensions (add padding)
    const padding = 20;
    canvas.width = Math.ceil(maxWidth + padding * 2);
    canvas.height = Math.ceil(lines.length * lineHeight + padding * 2);

    // Draw background
    ctx.fillStyle = '#111111'; // Dark bg
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Text
    ctx.fillStyle = '#eeeeee'; // Light text
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textBaseline = 'top';

    lines.forEach((line, index) => {
      ctx.fillText(line, padding, padding + index * lineHeight);
    });

    // Convert and download
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ascii-art.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setToast("Saved as ascii-art.png");
  };

  return (
    <div className="app-container">
      {isEditing && (
        <ImageEditor
          src={editorSource}
          onSave={handleEditSave}
          onCancel={handleEditCancel}
        />
      )}

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
        onSaveTxt={handleSaveAsTxt}
        onSavePng={handleSaveAsPng}

        // Editor
        onEdit={startEditing}
        hasImage={!!imgElement}
      />
      <OutputDisplay text={text} />
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}

export default App;
