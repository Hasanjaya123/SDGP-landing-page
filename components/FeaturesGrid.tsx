import React, { useState } from 'react';
import { Smartphone, Eye, Box, Gavel, Tag, UserCheck, PenTool, Users, MapPin, Play } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'AI "For You" Feed',
    description: 'Collaborative filtering learns from behavior to surface art users love.',
    iconName: 'Smartphone'
  },
  {
    title: 'Visual Search',
    description: 'Computer Vision analyzes photos to find stylistically similar artwork.',
    iconName: 'Eye'
  },
  {
    title: 'AR Try-On',
    description: 'True-to-scale visualization of artwork on user walls via camera.',
    iconName: 'Box'
  },
  {
    title: 'Verified Studios',
    description: 'Mini-websites for artists to share their process and build trust.',
    iconName: 'UserCheck'
  },
  {
    title: 'Commissions',
    description: 'Seamless workflow for requesting and managing custom art pieces.',
    iconName: 'PenTool'
  },
  {
    title: 'Art Map',
    description: 'GPS-enabled discovery of local artists and physical galleries.',
    iconName: 'MapPin'
  },
];

const getIcon = (name: string) => {
  switch (name) {
    case 'Smartphone': return <Smartphone className="w-6 h-6" />;
    case 'Eye': return <Eye className="w-6 h-6" />;
    case 'Box': return <Box className="w-6 h-6" />;
    case 'Gavel': return <Gavel className="w-6 h-6" />;
    case 'Tag': return <Tag className="w-6 h-6" />;
    case 'UserCheck': return <UserCheck className="w-6 h-6" />;
    case 'PenTool': return <PenTool className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'MapPin': return <MapPin className="w-6 h-6" />;
    default: return <Box className="w-6 h-6" />;
  }
};

const getColorClass = (index: number) => {
  const colors = [
    'text-blue-500 bg-blue-50 group-hover:bg-blue-500 group-hover:text-white',
    'text-purple-500 bg-purple-50 group-hover:bg-purple-500 group-hover:text-white',
    'text-emerald-500 bg-emerald-50 group-hover:bg-emerald-500 group-hover:text-white',
    'text-brand-orange bg-orange-50 group-hover:bg-brand-orange group-hover:text-white',
    'text-pink-500 bg-pink-50 group-hover:bg-pink-500 group-hover:text-white',
    'text-indigo-500 bg-indigo-50 group-hover:bg-indigo-500 group-hover:text-white',
    'text-rose-500 bg-rose-50 group-hover:bg-rose-500 group-hover:text-white',
    'text-cyan-500 bg-cyan-50 group-hover:bg-cyan-500 group-hover:text-white',
    'text-amber-500 bg-amber-50 group-hover:bg-amber-500 group-hover:text-white',
  ];
  return colors[index % colors.length];
};

export const FeaturesGrid: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cream skew-x-12 -z-10 opacity-50"></div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
            Technology Meets <span className="text-brand-orange italic">Tradition</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Our platform integrates nine core technologies to solve the biggest friction points in the art market: discovery, trust, and visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${getColorClass(idx)}`}>
                {getIcon(feature.iconName)}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Integrated AR Try-On Section at the bottom */}
        <div className="mt-24 pt-20 border-t border-gray-100 grid md:grid-cols-12 gap-12 items-start">
          {/* Left: The try on AR rectangle box */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark md:whitespace-nowrap leading-tight">
              Example of the <span className="text-brand-orange">Live AR Preview</span>
            </h2>
            <div className="p-10 rounded-3xl bg-brand-cream border border-orange-100/60 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300 max-w-xl">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20">
                <Box className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-brand-dark mb-4 group-hover:text-emerald-500 transition-colors">
                AR Try-On
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">
                True-to-scale visualization of artwork on user walls via camera.
              </p>
            </div>
          </div>

          {/* Right: Click-to-play Video in Rectangle */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px]">
              <div
                className="relative aspect-[9/16] bg-black rounded-[32px] overflow-hidden shadow-2xl border border-gray-100/80 cursor-pointer group select-none"
                onClick={() => !isPlaying && setIsPlaying(true)}
              >
                {!isPlaying ? (
                  <>
                    {/* YouTube Video Cover Thumbnail */}
                    <img
                      src="https://img.youtube.com/vi/HA3RgGR-9XQ/hqdefault.jpg"
                      alt="AR Try-On Preview"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 group-hover:from-black/75 transition-colors duration-300"></div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/95 text-brand-orange flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                        <Play size={28} className="fill-current ml-1" />
                      </div>
                    </div>

                    {/* Quick helper tag */}
                    <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-tangerine block mb-1">
                        Virtual Placement Demo
                      </span>
                      <span className="text-base font-serif font-bold block">
                        Watch Live Demonstration
                      </span>
                    </div>
                  </>
                ) : (
                  /* YouTube Iframe */
                  <iframe
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/embed/HA3RgGR-9XQ?autoplay=1&controls=1&rel=0&modestbranding=1"
                    title="AR Try-On Youtube Demonstration Video"
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 'none' }}
                  />
                )}
              </div>
              <p className="text-center text-xs text-gray-400 mt-4 italic">
                Click on the video above to play the YouTube presentation
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};