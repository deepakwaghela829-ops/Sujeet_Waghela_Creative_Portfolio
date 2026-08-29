import React from 'react';
import { useIntersection } from '../hooks/useIntersection';

const SWITCHER_OPTIONS = [
  { id: 0, num: '01', name: 'SPACE EDIT' },
  { id: 1, num: '02', name: 'AVM 2' },
  { id: 2, num: '03', name: 'AVM 1' },
  { id: 3, num: '04', name: 'AMV 3' },
  { id: 4, num: '05', name: 'SHOWREEL' },
];

export function HeroContent({ activeIndex, setActiveIndex }) {
  const [sectionRef, hasIntersected] = useIntersection(0.2);

  const isPinkAccent = activeIndex === 0 || activeIndex === 1;

  return (
    <section className="relative z-[2] w-full min-h-screen flex flex-col justify-between pt-[100px] sm:pt-[120px] pb-10 sm:pb-16 px-4 sm:px-[18px]">
      <div className="max-w-[1340px] w-full mx-auto flex flex-col justify-between flex-1 gap-8">
        
        {/* Top Controls Row: Video Switcher + Availability Status */}
        <div
          className="w-full flex items-center justify-between gap-4 flex-col sm:flex-row"
          aria-label="Video Controls and Availability"
        >
          {/* Left: Video Switcher Buttons */}
          <div className="w-full sm:w-auto flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1 max-w-full">
            {SWITCHER_OPTIONS.map((option) => {
              const isActive = activeIndex === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setActiveIndex(option.id)}
                  className={`role-link text-[10px] sm:text-xs leading-4 tracking-[-0.12px] font-medium uppercase text-left py-1.5 px-3 rounded-full border whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
                    isActive
                      ? 'opacity-100 font-semibold bg-white/20 border-white/50 text-white shadow-lg backdrop-blur-md'
                      : 'opacity-60 hover:opacity-90 border-white/10 bg-black/40 text-white/80'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="opacity-75 mr-1">{option.num} /</span>
                  <span>{option.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Availability Status */}
          <div className="w-full sm:w-auto flex items-center justify-start sm:justify-end gap-2 text-[11px] sm:text-xs leading-4 tracking-[-0.12px] font-medium uppercase whitespace-nowrap">
            <span
              className={`w-[8px] h-[8px] rounded-full animate-dot-pulse transition-colors duration-500 ${
                isPinkAccent
                  ? 'bg-[#F598F2] shadow-[0_0_10px_#F598F2]'
                  : 'bg-yellow-400 shadow-[0_0_10px_#FACC15]'
              }`}
              aria-hidden="true"
            />
            <span className="opacity-95 font-semibold text-white tracking-wider">AVAILABLE FOR PROJECTS</span>
          </div>
        </div>

        {/* Centered Glassmorphism Card */}
        <div
          ref={sectionRef}
          className="w-full max-w-[860px] mx-auto my-auto p-6 sm:p-12 md:p-14 rounded-[28px] sm:rounded-[36px] bg-neutral-950/45 backdrop-blur-2xl border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.6)] text-center flex flex-col items-center justify-center gap-5 sm:gap-7 transform transition-all duration-700"
        >
          {/* Subtitle Badge */}
          <div
            className={`inline-block py-1.5 px-4 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-yellow-400 ${
              hasIntersected ? 'animate-reveal-up' : 'opacity-0'
            }`}
          >
            Video Editor & Motion Graphics Designer
          </div>

          {/* Giant Centered Name */}
          <h1
            className={`text-[46px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-[-2px] sm:tracking-[-4px] font-bold uppercase text-white ${
              hasIntersected ? 'animate-reveal-up' : 'opacity-0'
            }`}
          >
            Sujeet Waghela
            <span
              className={`transition-colors duration-500 ${
                isPinkAccent ? 'text-[#F598F2]' : 'text-yellow-400'
              }`}
            >
              .
            </span>
          </h1>

          {/* Centered Description Paragraph */}
          <p
            className={`text-xs sm:text-base leading-relaxed tracking-[-0.16px] font-normal opacity-90 text-white/85 max-w-xl text-center ${
              hasIntersected ? 'animate-reveal-up' : 'opacity-0'
            }`}
          >
            Passionate Video Editor and Motion Designer skilled in Premiere Pro & After Effects. Creating documentary-style videos, podcasts, motion graphics, and cinematic edits with purpose.
          </p>

          {/* Centered CTA Buttons */}
          <div
            className={`flex items-center justify-center gap-3 sm:gap-4 flex-wrap w-full pt-2 ${
              hasIntersected ? 'animate-reveal-up' : 'opacity-0'
            }`}
            style={{ animationDelay: hasIntersected ? '0.08s' : '0s' }}
          >
            <a
              href="#works"
              className="cta-button text-xs leading-4 tracking-wider font-semibold uppercase py-3 sm:py-3.5 px-7 sm:px-8 border border-white/80 hover:border-white rounded-full inline-block text-center shadow-lg"
            >
              view my work
            </a>
            <a
              href="#contact"
              className="text-xs leading-4 tracking-wider font-semibold uppercase py-3 sm:py-3.5 px-7 sm:px-8 border border-white/30 hover:border-white rounded-full inline-block bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all text-center"
            >
              contact me
            </a>
          </div>
        </div>

        {/* Empty bottom balance element */}
        <div className="h-2"></div>

      </div>
    </section>
  );
}
