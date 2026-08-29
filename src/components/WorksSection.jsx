import React, { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { YOUTUBE_VIDEOS } from '../utils/mediaUrls';

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export function WorksSection() {
  const [playingProject, setPlayingProject] = useState(YOUTUBE_VIDEOS[0]);

  return (
    <section id="works" className="relative z-[2] w-full py-14 sm:py-24 px-3 sm:px-[18px] bg-black/95 border-t border-white/10">
      <div className="max-w-[1340px] mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 sm:mb-16">
          <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest">[ 01 / FEATURED WORKS ]</span>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12">
          
          {/* Main Section Title */}
          <div>
            <h2 className="text-2xl sm:text-5xl font-bold uppercase tracking-tight mb-2">
              Sujeet's Video <span className="text-yellow-400">Projects & Edits</span>
            </h2>
            <p className="text-white/60 text-xs sm:text-sm max-w-xl">
              Featuring showreel cuts, AVM/AMV motion edits, creative video post-production, and YouTube releases.
            </p>
          </div>

          {/* Featured Active Video Player */}
          {playingProject && (
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-yellow-400/30 bg-neutral-900 shadow-2xl group">
              <div className="aspect-video w-full max-h-[600px] relative bg-black flex items-center justify-center">
                <iframe
                  key={playingProject.id}
                  src={`${playingProject.embedUrl}?autoplay=1&rel=0`}
                  title={playingProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              <div className="p-4 sm:p-8 bg-neutral-900/90 backdrop-blur-md border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-yellow-400 uppercase tracking-widest mb-1">
                    <Sparkles className="w-3.5 h-3.5" /> {playingProject.type}
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold text-white mb-1.5 sm:mb-2">
                    {playingProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 max-w-2xl">
                    {playingProject.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {playingProject.watchUrl && (
                    <a
                      href={playingProject.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white text-xs font-medium transition-colors flex items-center gap-1.5 shadow-md"
                    >
                      <YoutubeIcon className="w-4 h-4 fill-current" /> Watch on YouTube
                    </a>
                  )}
                  <div className="flex items-center gap-2">
                    {playingProject.software.map((sw) => (
                      <span key={sw} className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 font-bold text-xs sm:text-sm flex items-center justify-center text-yellow-400">
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of All Video Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-2">
            {YOUTUBE_VIDEOS.map((project) => (
              <div
                key={project.id}
                onClick={() => setPlayingProject(project)}
                className={`p-3.5 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                  playingProject?.title === project.title
                    ? 'bg-yellow-400/10 border-yellow-400 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="aspect-video rounded-xl overflow-hidden bg-black mb-3.5 relative">
                  <img
                    src={`https://img.youtube.com/vi/${project.id}/hqdefault.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase text-yellow-400 tracking-wider">
                      {project.category}
                    </span>
                    {project.watchUrl && (
                      <span className="text-[9px] font-mono text-red-400 flex items-center gap-1">
                        <YoutubeIcon className="w-3 h-3 inline fill-current" /> YouTube
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-white/60 line-clamp-2 mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
