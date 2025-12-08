'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeContentProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  blur?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export default function FadeContent({
  children,
  className = '',
  duration = 0.4,
  delay = 0,
  blur = false,
  direction = 'none',
  distance = 20
}: FadeContentProps) {
  const directionOffset = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        initial={{
          opacity: 0,
          ...directionOffset[direction],
          ...(blur ? { filter: 'blur(8px)' } : {})
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          ...(blur ? { filter: 'blur(0px)' } : {})
        }}
        exit={{
          opacity: 0,
          ...(blur ? { filter: 'blur(8px)' } : {})
        }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
