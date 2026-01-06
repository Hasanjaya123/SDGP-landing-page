import React from 'react';
import { Smartphone, Eye, Box, Gavel, Tag, UserCheck, PenTool, Users, MapPin } from 'lucide-react';
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
    title: 'Live Auctions',
    description: 'Real-time bidding system driving excitement and higher value.',
    iconName: 'Gavel'
  },
  {
    title: 'Smart Tagging',
    description: 'Automated categorization for artists using image recognition.',
    iconName: 'Tag'
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
    title: 'Community Collections',
    description: 'Curate public collections and discover guest curator picks.',
    iconName: 'Users'
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
      </div>
    </section>
  );
};