import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EDUCATION_ITEMS = [
  {
    period: '2025 – 2026',
    title: 'Video Editing & Motion Graphics Program',
    institution: 'Arena Animation',
    location: 'Virar',
    description: 'Comprehensive specialized training in video post-production, motion graphics design, color grading, visual effects, tracking, and compositing.',
    active: true,
  },
  {
    period: 'Passed in 2025',
    title: 'Diploma in Computer Engineering',
    institution: 'Viva College of Technology',
    location: 'Virar',
    description: 'Foundational computer engineering education covering technical problem solving, digital systems, software fundamentals, and project execution.',
    active: false,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="relative z-[2] w-full py-24 px-[15px] md-tablet:px-[18px] mobile:px-[18px] bg-black/80 border-t border-white/10">
      <div className="max-w-[1340px] mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest">[ 04 / EDUCATION ]</span>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="text-center mb-4">
            <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2">
              Academic & Technical <span className="text-yellow-400">Background</span>
            </h3>
            <p className="text-white/60 text-sm">
              Combining creative animation training with solid computer engineering credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl border transition-all flex flex-col justify-between relative overflow-hidden group ${
                  item.active
                    ? 'bg-gradient-to-b from-yellow-400/10 via-white/5 to-white/5 border-yellow-400/50 shadow-xl'
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-yellow-400">
                      <Calendar className="w-3.5 h-3.5" /> {item.period}
                    </span>
                    <GraduationCap className="w-6 h-6 text-white/40 group-hover:text-yellow-400 transition-colors" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm font-medium text-white/80 flex items-center gap-1.5">
                      {item.institution}, <span className="text-white/50">{item.location}</span>
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-white/60 pt-2">
                    {item.description}
                  </p>
                </div>

                {item.active && (
                  <div className="mt-6 pt-4 border-t border-yellow-400/20 text-[11px] font-mono text-yellow-400 uppercase tracking-widest">
                    ✦ Current Specialization
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
