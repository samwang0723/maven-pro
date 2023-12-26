import React, { useRef, useEffect } from 'react';

interface CandleStickBarProps {
  id: string;
  high: number;
  low: number;
  open: number;
  close: number;
}

function drawCandleStick({ id, high, low, open, close }) {
  // Get the canvas element
  const canvas = document.getElementsByClassName(
    `canvas${id}`
  )[0] as HTMLCanvasElement;
  var ctx = canvas.getContext('2d');

  // Set canvas width and height explicitly
  canvas.width = Math.floor(canvas.clientWidth);
  canvas.height = Math.floor(canvas.clientHeight);

  // Draw the wick
  var maxValue = high;
  var minValue = low;
  var gap = maxValue - minValue;
  if (gap === 0) {
    gap = 1.5;
  }
  let ratio = canvas.height / (maxValue - minValue);

  // scale down the values
  high = Math.round((high - minValue + 0.0001) * ratio);
  low = Math.round((low - minValue + 0.0001) * ratio);
  open = Math.round((open - minValue + 0.0001) * ratio);
  close = Math.round((close - minValue + 0.0001) * ratio);

  // set candlestick bar color
  let barColor = 'green';
  if (close > open) {
    barColor = 'red';
  }

  // draw candlestick bar
  ctx.fillStyle = barColor;
  let diff = Math.abs(open - close);
  diff = diff > 1 ? diff : 2;

  let max = Math.max(open, close);
  max = max !== Infinity && max > 1 ? max : 20;
  max = Math.round(max);
  diff = Math.round(diff);

  ctx.fillRect(4, canvas.height - max, 12, diff);

  // draw wick
  ctx.strokeStyle = barColor;
  ctx.beginPath();
  ctx.moveTo(Math.floor(canvas.width / 2) + 0.5, high + 0.5);
  ctx.lineTo(Math.floor(canvas.width / 2) + 0.5, low + 0.5);
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
