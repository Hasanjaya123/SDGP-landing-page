import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const VIDEO_LINK = "";

export const Hero: React.FC = () => {
  const getVideoId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(VIDEO_LINK);
  const isDirectFile = VIDEO_LINK.match(/\.(mp4|webm|ogg)$/);

  return (
    <section id="mission" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-cream w-full">
      
      {/* 1. BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 w-full h-full z-0">
        {videoId ? (
          <div className="absolute inset-0 w-full h-full pointer-events-none">
             <iframe 
                className="w-full h-full object-cover scale-150 md:scale-100" // Slight scale on mobile to cover gaps
                src={`${VIDEO_LINK}`}
                title="Background Video"
                allow="autoplay; encrypted-media" 
                style={{ border: 'none' }} 
             />
          </div>
        ) : isDirectFile ? (
            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                <source src={VIDEO_LINK} type="video/mp4" />
            </video>
        ) : null}
      </div>

      {/* 2. GRADIENT OVERLAY (Made much more transparent for visibility) */}
      <div className="absolute inset-0 z-2 bg-gradient-to-r from-brand-cream/90 via-brand-cream/40 to-transparent pointer-events-none" />

      {/* 3. CONTENT LAYER */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8 max-w-2xl pt-10 lg:pt-0">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            Seed Round Open
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark leading-[1.1]">
            Discover the <br />
            <span className="italic pr-2 font-serif">Soul</span> 
            of Sri Lankan <br /> Art.
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-lg">
            We blend advanced AI recommendation engines with immersive Augmented Reality to connect global collectors with Sri Lanka's finest creative talents.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-900 transition-colors">
              Sign Up Now <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full font-bold hover:bg-white transition-colors shadow-sm">
              <Play size={18} fill="currentColor" /> Watch Demo
            </button>
          </div>

          {/* Stats Footer */}
          <div className="pt-8 flex items-center gap-12 border-t border-gray-200/50 mt-8">
            <div>
              <p className="text-3xl font-bold font-serif">500+</p>
              <p className="text-sm font-semibold text-gray-600">Verified Artists</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold font-serif">2M</p>
              <p className="text-sm font-semibold text-gray-600">Art Tokenized</p>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Floating Images (Matches the Red Circle) */}
        <div className="relative h-[600px] hidden lg:block w-full">
           {/* Center Background Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>

           {/* Card 1: Top Left (Beach Tower) */}
           <div className="absolute top-0 left-10 w-64 h-72 bg-white p-2 rounded-2xl shadow-xl transform -rotate-2 z-10 hover:z-20 hover:scale-105 transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" alt="Beach" className="w-full h-full object-cover rounded-xl" />
           </div>

           {/* Card 2: Bottom Left (Green Leaves) */}
           <div className="absolute bottom-10 left-20 w-56 h-64 bg-white p-2 rounded-2xl shadow-2xl transform rotate-3 z-30 hover:scale-105 transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600" alt="Nature" className="w-full h-full object-cover rounded-xl" />
           </div>

           {/* Card 3: Right (Road) */}
           <div className="absolute top-20 right-0 w-72 h-80 bg-white p-2 rounded-2xl shadow-xl transform rotate-2 z-20 hover:z-30 hover:scale-105 transition-all duration-300 group">
              <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600" alt="Road" className="w-full h-full object-cover rounded-xl" />
              
              {/* Floating 'Bid Now' Badge on the card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg flex justify-between items-center">
                <div>
                   <p className="text-xs font-bold text-gray-500">Oceanic Dreams</p>
                   <p className="text-xs font-bold text-black">Kumara T.</p>
                </div>
                <span className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full">Bid Now</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};