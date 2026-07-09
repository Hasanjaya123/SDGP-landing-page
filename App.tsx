import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ArPreviewSection } from './components/ArPreviewSection';
import { TeamSection } from './components/TeamSection';
import { PartnersSection } from './components/PartnersSection';
import { Footer } from './components/Footer';
import { AiChatWidget } from './components/AiChatWidget';

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col font-sans text-art-900 selection:bg-art-200 selection:text-art-900">
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesGrid />
      <ArPreviewSection />
      <TeamSection />
      <PartnersSection />
      <Footer />
      <AiChatWidget />
    </main>
  );
};

export default App;