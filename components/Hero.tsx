import React from 'react';
import { Play, ArrowRight } from 'lucide-react';


import { ThreeDMarquee } from '../components/lightswind/3d-marquee'; 

const VIDEO_LINK = "/videos/abstract.mp4";

const VIDEO_LINK = "";



const heroMarqueeImages = [
  { src: "https://images.unsplash.com/flagged/photo-1567934150921-7632371abb32?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Abstract Image" },
  { src: "https://plus.unsplash.com/premium_photo-1664013263421-91e3a8101259?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Blue Sculpture" },
  { src: "https://fs.artdevivre.com/storage/articles/contect-new/vermeer/vermeer-most-famous-painting.jpg", alt: "Girl with a pearl earrings" },
  { src: "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Abstract Art" },
  { src: "https://pet-art.net/assets/images/wildlife-art/scottish-wildcat-cub-oil-painting-wonderment.webp", alt: "Road Art" },
  { src: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=600", alt: "Neon Art" },
  { src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600", alt: "Abstract Art" },
  { src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=600", alt: "Eyes" },
  { src: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Modern Art" },
  { src: "https://plus.unsplash.com/premium_photo-1666264200782-8cc1096bb417?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Street Art" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWlUutPlgsLBY8Gz75QSwzTIHlxO8Fs-v5Q&s", alt: "Colorful Art" },
  { src: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&q=80&w=600", alt: "Fluid Art" },
];

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
                className="w-full h-full object-cover scale-150 md:scale-100"
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

      {/* 2. GRADIENT OVERLAY - Kept subtle for text readability */}
      <div className="absolute inset-0 z-2 bg-gradient-to-r from-brand-cream/95 via-brand-cream/60 to-transparent pointer-events-none" />

      {/* 3. CONTENT LAYER */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
        
        {/* Left Column: Text Content (Unchanged) */}
        <div className="space-y-8 max-w-2xl pt-10 lg:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            Seed Round Open
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark leading-[1.1]">
            Discover the <br />
            <span className="italic pr-2 font-serif">Soul</span> 
            of Sri Lankan <br /> Art.
          </h1>

          <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-lg">
            We blend advanced AI recommendation engines with immersive Augmented Reality to connect global collectors with Sri Lanka's finest creative talents.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-900 transition-colors">
              Sign Up Now <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full font-bold hover:bg-white transition-colors shadow-sm">
              <Play size={18} fill="currentColor" /> Watch Demo
            </button>
          </div>

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

        {/* --- RIGHT COLUMN: MARQUEE --- */}
        <div className="relative h-[700px] hidden lg:flex items-center justify-center w-full">
          
           <div className="transform scale-90 w-full">
             <ThreeDMarquee images={heroMarqueeImages} />
           </div>

        </div>

      </div>
    </section>
  );
};