import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

const SOFTWARE_LIST = [
  {
    code: 'Pr',
    name: 'Adobe Premiere Pro',
    category: 'Video Editing & Color Grading',
    color: 'bg-purple-900/60 border-purple-500/50 text-purple-300',
    accent: '#9999FF',
  },
  {
    code: 'Ae',
    name: 'Adobe After Effects',
    category: 'Motion Graphics & Visual FX',
    color: 'bg-indigo-900/60 border-indigo-500/50 text-indigo-300',
    accent: '#00005B',
  },
  {
    code: 'Ps',
    name: 'Adobe Photoshop',
    category: 'Graphics & Image Editing',
    color: 'bg-blue-900/60 border-blue-500/50 text-blue-300',
    accent: '#31A8FF',
  },
  {
    code: 'Ai',
    name: 'Adobe Illustrator',
    category: 'Vector Assets & Design',
    color: 'bg-amber-900/60 border-amber-500/50 text-amber-300',
    accent: '#FF9A00',
  },
];

const CORE_SKILLS = [
  'Creative Thinking',
  'Attention to Detail',
  'Storytelling & Pacing',
  'Time Management',
  'Problem Solving',
  'Quick Learner',
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-[2] w-full py-24 px-[15px] md-tablet:px-[18px] mobile:px-[18px] bg-black/90 border-t border-white/10">
      <div className="max-w-[1340px] mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest">[ 03 / SKILLS & SOFTWARE ]</span>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Software Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight mb-2">
                Software <span className="text-yellow-400">Mastery</span>
              </h3>
              <p className="text-white/60 text-sm">
                Industry-standard Adobe Creative Cloud suite for video production and motion design.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOFTWARE_LIST.map((sw) => (
                <div
                  key={sw.code}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-all group relative overflow-hidden flex items-center gap-4"
                >
                  {/* Software Badge Icon */}
                  <div className={`w-14 h-14 rounded-xl border flex items-center justify-center font-bold text-xl tracking-wide shadow-lg ${sw.color}`}>
                    {sw.code}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white group-hover:text-yellow-400 transition-colors">
                      {sw.name}
                    </h4>
                    <p className="text-xs text-white/50">{sw.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Core Professional Skills */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight mb-2">
                Core <span className="text-yellow-400">Capabilities</span>
              </h3>
              <p className="text-white/60 text-sm">
                Essential attributes ensuring top-tier video production & seamless teamwork.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs uppercase font-mono text-yellow-400">
                <Sparkles className="w-4 h-4" /> Professional Strengths
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CORE_SKILLS.map((skill) => (
                  <div key={skill} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-white/90">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
