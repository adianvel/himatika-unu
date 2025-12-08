'use client';

import { ReactNode, CSSProperties } from 'react';

interface StarBorderProps {
  children: ReactNode;
  as?: 'button' | 'div' | 'span' | 'a';
  className?: string;
  color?: string;
  speed?: string;
  onClick?: () => void;
}

export default function StarBorder({
  children,
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  ...props
}: StarBorderProps) {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-xl py-2 px-4 ${className}`}
      style={
        {
          '--star-color': color,
          '--star-speed': speed
        } as CSSProperties
      }
      {...props}
    >
      <div
        className="absolute inset-0 animate-star-movement"
        style={{
          background: `radial-gradient(circle, var(--star-color) 0%, transparent 60%)`,
          width: '100px',
          height: '100px',
          top: '-50px',
          left: '-50px'
        }}
      />
      <div
        className="absolute inset-0 animate-star-movement-reverse"
        style={{
          background: `radial-gradient(circle, var(--star-color) 0%, transparent 60%)`,
          width: '100px',
          height: '100px',
          bottom: '-50px',
          right: '-50px',
          top: 'auto',
          left: 'auto'
        }}
      />
      <div className="relative z-10 rounded-lg bg-slate-900 px-6 py-3 text-white">
        {children}
      </div>
    </Component>
  );
}
