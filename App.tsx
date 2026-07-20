import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { TeamSection } from './components/TeamSection';
import { PartnersSection } from './components/PartnersSection';
import { Footer } from './components/Footer';
import { AiChatWidget } from './components/AiChatWidget';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen flex flex-col font-sans text-art-900 selection:bg-art-200 selection:text-art-900">
      {/* Page Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[9999] pointer-events-none">
        <div 
          className="bg-[#E5B842] h-full transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesGrid />
      <TeamSection />
      <PartnersSection />
      <Footer />
      <AiChatWidget />
    </main>
  );
};

export default App;