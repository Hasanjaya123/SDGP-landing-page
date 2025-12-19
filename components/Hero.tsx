import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

// ==========================================
// CONFIGURATION
// ==========================================
const YOUTUBE_LINK = "https://www.youtube.com/watch?v=qyvdYnTtBfE"; 
// ==========================================

export const Hero: React.FC = () => {
  const getVideoId = (url: string) => {
    if (!url) return null;
    // Check if it's a direct file link
    if (url.match(/\.(mp4|webm|ogg)$/)) return null;
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(YOUTUBE_LINK);
  const isDirectFile = YOUTUBE_LINK.match(/\.(mp4|webm|ogg)$/);

  return (
    <section id="mission" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-cream">
      {/* 1. ANIMATED BACKGROUND BLOBS */}
      <div className="absolute top-0 -left-10 w-96 h-96 bg-brand-tangerine rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-0 -right-10 w-96 h-96 bg-brand-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-brand-fuchsia/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-brand-gold/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-1000"></div>

      {/* 2. BACKGROUND VIDEO LAYER (Absolute Bottom) */}
      <div className="absolute inset-0 w-full h-full z-5 overflow-hidden opacity-40 mix-blend-overlay">
        {videoId ? (
          <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
             <iframe 
                className="w-full h-full object-cover grayscale"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`}
                title="Background Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                style={{ border: 'none', pointerEvents: 'none' }} 
             />
          </div>
        ) : isDirectFile ? (
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute w-full h-full object-cover grayscale"
            >
                <source src={YOUTUBE_LINK} type="video/mp4" />
            </video>
        ) : (
          <div className="absolute inset-0 bg-gray-100" />
        )}
      </div>

      {/* 3. GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-15 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-brand-cream/30 pointer-events-none" />

      {/* 4. CONTENT LAYER */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 backdrop-blur-md rounded-full text-black text-xs font-bold tracking-widest uppercase border border-black/10 shadow-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            Seed Round Open
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark leading-[1.1]">
            Discover the <br />
            <span className="text-black italic pr-2">Soul</span> 
            of Sri Lankan Art.
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-md font-medium drop-shadow-sm">
            We blend advanced AI recommendation engines with immersive Augmented Reality to connect global collectors with Sri Lanka's finest creative talents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:bg-gray-900 transition-all hover:-translate-y-1 hover:scale-105">
              Sign Up Now
              <ArrowRight size={18} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-brand-dark border border-brand-orange/20 px-8 py-4 rounded-full font-bold hover:bg-white hover:border-black hover:text-black transition-all shadow-sm">
              <Play size={18} className="fill-current" />
              Watch Demo
            </button>
          </div>

          <div className="pt-8 flex items-center gap-8 text-sm text-gray-600 font-medium border-t border-brand-orange/10">
            <div>
              <p className="text-3xl font-serif font-bold text-black">500+</p>
              <p className="text-black font-semibold">Verified Artists</p>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-black/30 to-transparent" />
            <div>
              <p className="text-3xl font-serif font-bold text-black">2M</p>
              <p className="text-black font-semibold">Art</p>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Images */}
        <div className="relative h-[600px] hidden md:block perspective-1000">
             {/* Decorative Background for visuals */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[90%] bg-gradient-to-tr from-brand-gold/30 via-brand-orange/20 to-brand-fuchsia/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />

             {/* Card 1: Back Left */}
            <div className="absolute top-10 left-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 z-10 animate-float-delayed border-4 border-white/80 ring-1 ring-black/5">
               <img src="https://picsum.photos/400/500?random=1" alt="Art Sample 1" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-serif italic">Abstract Thoughts</p>
               </div>
            </div>

            {/* Card 2: Front Right (Main Focus) */}
            <div className="absolute top-20 right-20 w-72 h-96 bg-white rounded-2xl overflow-hidden shadow-2xl shadow-brand-fuchsia/20 transform rotate-3 z-20 animate-float border-[6px] border-white ring-1 ring-black/5">
               <img src="https://picsum.photos/400/600?random=2" alt="Art Sample 2" className="w-full h-full object-cover" />
                {/* UI Overlay inside card */}
                <div className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-xl shadow-lg backdrop-blur-md">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-xs font-bold text-gray-900">Oceanic Dreams</p>
                            <p className="text-[10px] text-gray-600">Kumara T.</p>
                        </div>
                        <button className="bg-black text-white text-[10px] px-3 py-1.5 rounded-full hover:bg-gray-800 transition-all shadow-md">Bid Now</button>
                    </div>
                </div>
            </div>

            {/* Card 3: Bottom Left */}
            <div className="absolute bottom-10 left-32 w-56 h-72 rounded-2xl overflow-hidden shadow-xl transform -rotate-3 z-10 transition-all duration-500 hover:scale-105 border-4 border-white hover:z-30 ring-1 ring-black/5">
               <img src="https://picsum.photos/400/500?random=3" alt="Art Sample 3" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
            </div>
        </div>
      </div>
    </section>
  );
};