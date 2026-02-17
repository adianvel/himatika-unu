'use client';

import { useRef, useEffect, useState } from 'react';

interface VideoBackgroundProps {
  src: string;
  className?: string;
}

export default function VideoBackground({ src, className = '' }: VideoBackgroundProps) {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<'A' | 'B'>('A');

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    const FADE_DURATION = 1; // seconds before end to start crossfade

    const handleTimeUpdate = () => {
      const active = activeVideo === 'A' ? videoA : videoB;
      const standby = activeVideo === 'A' ? videoB : videoA;

      if (active.duration && active.currentTime >= active.duration - FADE_DURATION) {
        // Start the standby video and crossfade
        standby.currentTime = 0;
        standby.play().catch(() => {});
        setActiveVideo(prev => (prev === 'A' ? 'B' : 'A'));
      }
    };

    const active = activeVideo === 'A' ? videoA : videoB;
    active.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      active.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [activeVideo]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <video
        ref={videoARef}
        autoPlay
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          activeVideo === 'A' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={src} type="video/webm" />
      </video>
      <video
        ref={videoBRef}
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          activeVideo === 'B' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  );
}
