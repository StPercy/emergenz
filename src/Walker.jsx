import React, { useEffect, useRef, useState } from 'react';
import './Walker.css';
const Walker = () => {
  const canvasRef = useRef(null);
  const [walkerColor, setWalkerColor] = useState(getRandomColor());

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let x = canvas.width / 2;
    let y = canvas.height / 2;

    const drawWalker = () => {
      context.fillStyle = walkerColor;
      context.fillRect(x, y, 2, 2);

      const stepSize = 2;
      const choice = Math.floor(Math.random() * 4);

      switch (choice) {
        case 0:
          x += stepSize;
          break;
        case 1:
          x -= stepSize;
          break;
        case 2:
          y += stepSize;
          break;
        case 3:
          y -= stepSize;
          break;
        default:
          break;
      }

      // Ensure the walker stays within the canvas bounds
      x = Math.max(0, Math.min(x, canvas.width - 2));
      y = Math.max(0, Math.min(y, canvas.height - 2));
      console.log(x);
      console.log(y);

    };

    const animate = () => {
      drawWalker();
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => cancelAnimationFrame(animate);
  }, [walkerColor]);

  // Handler for canvas click to generate a new walker with a new color
  const handleCanvasClick = () => {
    setWalkerColor(getRandomColor());
  };

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      style={{ border: '1px solid black', cursor: 'pointer' }}
      onClick={handleCanvasClick}
    />
  );
};

export default Walker;
