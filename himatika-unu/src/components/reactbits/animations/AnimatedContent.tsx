'use client';

import { useRef } from 'react';
import { motion, useInView, Variant } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedContentProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  blur?: boolean;
  scale?: number;
}

export default function AnimatedContent({
  children,
  className = '',
  direction = 'up',
  distance = 50,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  blur = false,
  scale = 1
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const directionOffset = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 }
  };

  const hidden: Variant = {
    opacity: 0,
    x: directionOffset[direction].x,
    y: directionOffset[direction].y,
    scale,
    ...(blur ? { filter: 'blur(10px)' } : {})
  };

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    ...(blur ? { filter: 'blur(0px)' } : {})
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
