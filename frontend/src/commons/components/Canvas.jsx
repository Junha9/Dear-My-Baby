import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Canvas({ hidden, inputFile, setImageFile, setImageDataUrl }) {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 200;
    canvas.height = 200;
    const context = canvas.getContext('2d');
    setCanvas(canvas);
    setCtx(context);
  }, []);

  useEffect(() => {
    if (canvas != null && ctx != null && inputFile != null && inputFile.type.match(/image.*/)) {
      const url = URL.createObjectURL(inputFile);
      const img = new Image();

      img.onload = () => {
        ctx.drawImage(img, 0, 0, 200, 200);
        if (setImageFile != null) {
          canvas.toBlob(
            (blob) => {
              setImageFile(blob);
            },
            'image/jpeg',
            0.95,
          );
        }
        if (setImageDataUrl != null) {
          const dataUrl = canvas.toDataURL('image/jpeg');
          setImageDataUrl(dataUrl);
        }
      };
      img.src = url;
    }
  }, [inputFile]);

  return (
    <div className="canvas_wrap" style={{ display: hidden ? 'none' : null, backgroundColor: 'white' }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

Canvas.propTypes = {
  hidden: PropTypes.any,
  inputFile: PropTypes.any,
  setImageFile: PropTypes.any,
  setImageDataUrl: PropTypes.any,
};
