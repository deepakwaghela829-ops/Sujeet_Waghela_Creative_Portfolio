import React, { useState } from 'react';
import { useLiveClock } from '../hooks/useLiveClock';

const NAV_ITEMS = [
  { num: '01', label: 'Works', href: '#works' },
  { num: '02', label: 'About', href: '#about' },
  { num: '03', label: 'Skills', href: '#skills' },
  { num: '04', label: 'Education', href: '#education' },
  { num: '05', label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const clock = useLiveClock();

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1340px] mx-auto py-3 sm:py-4 px-3 sm:px-[18px]">
        <nav className="flex items-center justify-between gap-2" aria-label="Main Navigation">
          
          {/* Logo / Name */}
          <a href="#" onClick={closeMenu} className="flex items-center gap-1.5 sm:gap-2 group flex-shrink-0">
            <span className="text-xs sm:text-sm font-semibold tracking-tight uppercase group-hover:text-[#F598F2] transition-colors truncate max-w-[140px] sm:max-w-none">
              Sujeet Waghela
            </span>
            <span className="text-[9px] sm:text-[10px] py-0.5 px-1.5 sm:px-2 rounded-full bg-white/10 text-white/70 font-mono flex-shrink-0">
              Editor & FX
            </span>
          </a>

          {/* Desktop & Tablet Navigation links */}
          <ul className="flex items-center gap-6 md-tablet:gap-4 mobile:hidden">
            {NAV_ITEMS.map((item) => (
              <li key={item.num}>
                <a
                  href={item.href}
                  className="nav-link-underline flex items-baseline gap-1 py-1"
                >
                  <span className="text-[8px] leading-3 tracking-[-0.08px] font-medium uppercase opacity-75">
                    {item.num}
                  </span>
                  <span className="text-xs leading-4 tracking-[-0.12px] font-medium uppercase">
                    / {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side: Clock & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-6 text-[11px] sm:text-xs leading-4 tracking-[-0.12px] font-medium uppercase">
            <a
              href="mailto:sujeetwaghela2@gmail.com"
              className="nav-link-underline hover:text-white/80 transition-colors hidden md:inline-block"
            >
              sujeetwaghela2@gmail.com
            </a>
            
            <span className="opacity-80 font-mono tracking-normal text-[10px] sm:text-[11px] flex-shrink-0" aria-live="polite">
              {clock || '--:--:--'}
            </span>

            {/* Mobile Menu Toggle Button */}
            <div className="hidden mobile:block">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-[10px] sm:text-xs leading-4 tracking-[-0.12px] font-medium uppercase flex items-center gap-1 py-1 px-2.5 sm:px-3 border border-white/30 rounded-full hover:border-white transition-colors bg-white/10 text-white active:scale-95 cursor-pointer relative z-50"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Panel using CSS Grid transition */}
        <div
          className={`hidden mobile:grid mobile-menu-grid overflow-hidden ${
            mobileMenuOpen ? 'mobile-menu-grid-open border-b border-white/10 pb-5 pt-3' : 'mobile-menu-grid-closed'
          }`}
        >
          <div className="min-h-0 flex flex-col gap-4 pt-2">
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.num}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-baseline gap-2.5 text-lg sm:text-[24px] leading-7 tracking-[-0.84px] font-medium uppercase hover:opacity-70 active:text-yellow-400 transition-colors"
                  >
                    <span className="text-[10px] sm:text-[12px] leading-4 tracking-[-0.12px] opacity-60 font-mono">
                      {item.num}
                    </span>
                    <span>/ {item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2 text-xs opacity-75 border-t border-white/10">
              <a href="mailto:sujeetwaghela2@gmail.com" onClick={closeMenu} className="underline text-yellow-400 font-mono text-[11px]">
                sujeetwaghela2@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
