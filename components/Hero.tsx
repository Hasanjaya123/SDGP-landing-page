import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const YOUTUBE_LINK = "https://www.youtube.com/watch?v=qyvdYnTtBfE";

export const Hero: React.FC = () => {
  const getVideoId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(YOUTUBE_LINK);
  const isDirectFile = YOUTUBE_LINK.match(/\.(mp4|webm|ogg)$/);

  return (
    <section id="mission" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-cream">
      
      {/* 1. BACKGROUND VIDEO LAYER */}
      {/* Removed 'opacity-30' to make video fully visible */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {videoId ? (
          /* Changed width/height from 300% to 100% (w-full h-full) to fit the section */
          <div className="absolute inset-0 w-full h-full pointer-events-none">
             <iframe 
                /* Removed 'grayscale' for full visibility. Add it back if you want B&W. */
                className="w-full h-full object-cover"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`}
                title="Background Video"
                allow="autoplay; encrypted-media" 
                style={{ border: 'none' }} 
             />
          </div>
        ) : isDirectFile ? (
            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                <source src={YOUTUBE_LINK} type="video/mp4" />
            </video>
        ) : null}
      </div>

      {/* 2. ANIMATED BACKGROUND BLOBS (Set to z-1) */}
      {/* Kept as is, but you can lower opacity here if they block the video too much */}
      <div className="absolute top-0 -left-10 w-96 h-96 bg-brand-tangerine rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob z-1"></div>
      <div className="absolute top-0 -right-10 w-96 h-96 bg-brand-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 z-1"></div>

      {/* 3. GRADIENT OVERLAY (Set to z-2) */}
      {/* Reduced opacity: 'from-brand-cream' -> 'from-brand-cream/80' so video shows through */}
      <div className="absolute inset-0 z-2 bg-gradient-to-r from-brand-cream/80 via-brand-cream/40 to-transparent pointer-events-none" />

      {/* 4. CONTENT LAYER (Highest z-index) */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark leading-[1.1]">
            Discover the <br />
            <span className="text-black italic pr-2">Soul</span> 
            of Sri Lankan Art.
          </h1>
          <p className="text-lg text-gray-700 max-w-md font-medium">
            Connecting global collectors with Sri Lanka's creative talents.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold">Sign Up Now</button>
            <button className="flex items-center gap-2 bg-white/80 px-8 py-4 rounded-full font-bold">
              <Play size={18} fill="currentColor" /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Column: Floating Images */}
        <div className="relative h-[600px] hidden md:block">
           <div className="absolute top-20 right-20 w-72 h-96 bg-white rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white">
              <img src="https://picsum.photos/400/600?random=2" alt="Art" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>
    </section>
  );
};