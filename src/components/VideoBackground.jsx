import React from 'react';
import { YOUTUBE_VIDEOS } from '../utils/mediaUrls';

export function VideoBackground({ activeIndex }) {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-black select-none" aria-hidden="true">
      {YOUTUBE_VIDEOS.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Crisp 1080p Full HD background video with ZERO YouTube play/pause icons or blur */}
            <video
              key={item.localFallback}
              src={item.localFallback}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="w-full h-full object-cover pointer-events-none filter contrast-105 saturate-[1.05]"
            />
          </div>
        );
      })}
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-[20] pointer-events-none" />
    </div>
  );
}
