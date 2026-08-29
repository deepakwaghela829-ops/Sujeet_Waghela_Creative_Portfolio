import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <footer id="contact" className="relative z-[2] w-full py-24 px-[15px] md-tablet:px-[18px] mobile:px-[18px] bg-black border-t border-white/10">
      <div className="max-w-[1340px] mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest">[ 05 / GET IN TOUCH ]</span>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Big CTA Callout */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-4xl sm:text-7xl font-bold uppercase tracking-tight leading-[95%]">
              Let's Create <br />
              <span className="text-yellow-400">Something Bold</span> Together.
            </h2>
            <p className="text-white/70 text-base max-w-xl">
              Available for full-time positions, freelance video editing, motion graphics design, documentary cuts, podcasts, and social media campaigns.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="mailto:sujeetwaghela2@gmail.com"
                className="py-4 px-8 rounded-full bg-yellow-400 text-black font-semibold text-sm uppercase tracking-wider hover:bg-yellow-300 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" /> Send Email
              </a>
              <a
                href="tel:9011188094"
                className="py-4 px-8 rounded-full border border-white/20 hover:border-white text-white font-semibold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call 9011188094
              </a>
            </div>
          </div>

          {/* Right Column: Contact Details Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <a
              href="mailto:sujeetwaghela2@gmail.com"
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-white/50">Email Address</span>
                  <h4 className="text-base font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    sujeetwaghela2@gmail.com
                  </h4>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-yellow-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            <a
              href="tel:9011188094"
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-white/50">Phone Number</span>
                  <h4 className="text-base font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    +91 9011188094
                  </h4>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-yellow-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-white/50">Location</span>
                  <h4 className="text-base font-semibold text-white">
                    Virar, Maharashtra, India
                  </h4>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <span>© 2026 SUJEET WAGHELA. ALL RIGHTS RESERVED.</span>
          <span>VIDEO EDITOR & MOTION GRAPHICS DESIGNER</span>
        </div>

      </div>
    </footer>
  );
}
