import React, { useRef, useEffect } from 'react';

interface CandleStickBarProps {
  id: string;
  high: number;
  low: number;
  open: number;
  close: number;
}

function drawCandleStick({
  id,
  high,
  low,
  open,
  close,
}: CandleStickBarProps): void {
  // Get the canvas element
  const canvas = document.getElementsByClassName(
    `canvas${id}`
  )[0] as HTMLCanvasElement;
    if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Adjust for device pixel ratio to avoid blurriness on high-DPI displays
  const dpr = window.devicePixelRatio || 1;
  const styleWidth = 6;
  const styleHeight = 18;
  canvas.width = styleWidth * dpr;
  canvas.height = styleHeight * dpr;
  ctx.scale(dpr, dpr);


  // Clear the canvas before drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the wick
  let maxValue = high;
  let minValue = low;
  let gap = maxValue - minValue;
  if (gap === 0) {
    gap = 1.5;
  }
  const ratio = styleHeight / gap; // Adjust ratio for the canvas size

  // scale down the values
  high = Math.round((high - minValue) * ratio);
  low = Math.round((low - minValue) * ratio);
  open = Math.round((open - minValue) * ratio);
  close = Math.round((close - minValue) * ratio);

  // set candlestick bar color
  let barColor = close > open ? 'red' : 'green';

  // draw candlestick bar
  ctx.fillStyle = barColor;
  let diff = Math.abs(open - close);
  diff = diff >= 1 ? diff : 1; // Ensure a minimum thickness of 1px for visibility

  let max = Math.max(open, close);
  max = max !== Infinity && max > 0 ? max : styleHeight;
  max = Math.round(max);
  diff = Math.round(diff);

  // Use integer values for pixel-perfect drawing
  const barWidth = 12; // Width of the candlestick bar
  const x = Math.round((styleWidth - barWidth) / 2); // Center the candlestick on the canvas
  const y = Math.round(styleHeight - max); // Position the bar from the bottom of the canvas

  ctx.fillRect(x, y, barWidth, diff);

  // draw wick
  ctx.strokeStyle = barColor;
  ctx.lineWidth = 1; // Set line width to 1px for a sharp line
  ctx.beginPath();
  const lineX = Math.round(styleWidth / 2);
  ctx.moveTo(lineX, styleHeight - high);
  ctx.lineTo(lineX, styleHeight - low);
  ctx.stroke();  

}

const CandleStickBar: React.FC<CandleStickBarProps> = ({
  id,
  high,
  low,
  open,
  close,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawCandleStick({
        id,
        high,
        low,
        open,
        close,
      });
    }
  }, [id, high, low, open, close]);

  return (
    <canvas
      className={`canvas${id}`}
      width="20px"
      height="40px"
      ref={canvasRef}
    />
  );
};

export default CandleStickBar;
