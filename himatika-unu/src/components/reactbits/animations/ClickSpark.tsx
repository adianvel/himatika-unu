'use client';

import { useRef, useCallback, ReactNode, MouseEvent } from 'react';

interface ClickSparkProps {
  children: ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}

export default function ClickSpark({
  children,
  sparkColor = '#fff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawSpark = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < sparkCount; i++) {
        const angle = (2 * Math.PI * i) / sparkCount;
        const distance = sparkRadius * progress;
        const sx = x + Math.cos(angle) * distance;
        const sy = y + Math.sin(angle) * distance;
        const size = sparkSize * (1 - progress);
        const opacity = 1 - progress;

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = sparkColor;
        ctx.beginPath();
        ctx.arc(sx, sy, size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    requestAnimationFrame(animate);
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    drawSpark(x, y);
  }, [drawSpark]);

  return (
    <div className="relative inline-block" onClick={handleClick}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[9999]"
        style={{ width: '100%', height: '100%' }}
      />
      {children}
    </div>
  );
}
