import React from 'react';
import { Mail, Phone, MapPin, Target, UserCheck } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative z-[2] w-full py-16 sm:py-24 px-4 sm:px-[18px] bg-black/80 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-[1340px] mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 sm:mb-16">
          <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest">[ 02 / ABOUT ME ]</span>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Artistic Yellow Glow Ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Photo Frame Container */}
              <div className="relative w-56 h-56 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-yellow-400 bg-neutral-900 shadow-2xl">
                <img
                  src="/sujeet_profile.jpg"
                  alt="Sujeet Waghela"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative badge */}
              <div className="absolute -bottom-2 right-2 sm:right-4 bg-yellow-400 text-black py-1.5 px-4 rounded-full font-semibold text-[11px] sm:text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <UserCheck className="w-3.5 h-3.5" /> Available for Hire
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Career Objective */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            <div>
              <h2 className="text-2xl sm:text-5xl font-bold uppercase tracking-tight mb-4 leading-tight">
                Creative Video Editor & <br />
                <span className="text-yellow-400">Motion Graphics Designer</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Passionate and creative Video Editor and Motion Graphics Designer with strong skills in Adobe Premiere Pro and After Effects. Experienced in creating documentary-style videos, podcasts, social media content, motion graphics, and cinematic edits through academic projects and personal practice. Skilled in storytelling, color grading, motion design, tracking, compositing, and visual effects. Seeking opportunities to contribute creative editing skills in a professional environment.
              </p>
            </div>

            {/* Career Objective Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center gap-2 text-yellow-400 font-medium uppercase text-xs tracking-wider mb-2">
                <Target className="w-4 h-4" /> Career Objective
              </div>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-normal">
                Seeking a position as a Video Editor or Motion Graphics Designer where I can apply my creative skills, storytelling abilities, and technical expertise to produce engaging visual content while continuing to grow professionally.
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
              <a href="tel:9011188094" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex flex-col gap-1">
                <div className="flex items-center gap-2 text-yellow-400 text-xs uppercase font-medium">
                  <Phone className="w-3.5 h-3.5" /> Phone
                </div>
                <span className="text-sm font-semibold">9011188094</span>
              </a>

              <a href="mailto:sujeetwaghela2@gmail.com" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex flex-col gap-1 overflow-hidden">
                <div className="flex items-center gap-2 text-yellow-400 text-xs uppercase font-medium">
                  <Mail className="w-3.5 h-3.5" /> Email
                </div>
                <span className="text-xs font-semibold truncate">sujeetwaghela2@gmail.com</span>
              </a>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-yellow-400 text-xs uppercase font-medium">
                  <MapPin className="w-3.5 h-3.5" /> Location
                </div>
                <span className="text-sm font-semibold">Virar, Maharashtra, India</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
