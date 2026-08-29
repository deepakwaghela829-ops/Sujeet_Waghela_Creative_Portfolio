import React, { useState } from 'react';
import { VideoBackground } from './components/VideoBackground';
import { Navbar } from './components/Navbar';
import { HeroContent } from './components/HeroContent';
import { WorksSection } from './components/WorksSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      {/* Background Videos with Blob Preloading & Crossfade */}
      <VideoBackground activeIndex={activeIndex} />

      {/* Navigation Header */}
      <Navbar />

      {/* Full Screen Hero Section */}
      <HeroContent activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      {/* Featured Video Works Section */}
      <WorksSection />

      {/* About & Career Objective Section */}
      <AboutSection />

      {/* Skills & Software Section */}
      <SkillsSection />

      {/* Education Timeline Section */}
      <EducationSection />

      {/* Contact Section & Footer */}
      <ContactSection />
    </div>
  );
}
