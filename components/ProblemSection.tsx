import React from 'react';
import { Users, SearchX, AlertCircle, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-brand-cream via-white to-brand-cream relative overflow-hidden">
      {/* Decorative BG elements */}
      <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header - The Situation */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-fuchsia font-bold tracking-widest text-xs uppercase mb-2 block">The Context</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">The Untapped Canvas</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Sri Lanka possesses a deep and vibrant pool of creative talent, from traditional artisans and young painters to dynamic street artists.
          </p>
          <div className="p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border-l-4 border-red-500 shadow-sm text-left relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-red-100 opacity-50 transform rotate-12">
               <AlertCircle size={150} />
            </div>
            <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2 text-lg relative z-10">
              <AlertCircle size={24} className="text-red-500" />
              The Core Problem
            </h3>
            <p className="text-red-900/80 font-bold text-lg font-serif relative z-10">
              "However, this talent remains largely invisible, unmonetized, and disconnected from a global audience. There is no centralized digital ecosystem that bridges the gap between Sri Lankan creators and the global market."
            </p>
          </div>
        </div>

        {/* The Pains Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Artist Pain */}
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-brand-fuchsia/30 transition-all group hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-fuchsia-100 p-4 rounded-2xl text-brand-fuchsia group-hover:scale-110 transition-transform shadow-inner">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For The Artist</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3 items-start">
                <span className="text-brand-fuchsia mt-1 text-lg">•</span>
                <span>Forced to rely on inefficient social media algorithms to find an audience.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-brand-fuchsia mt-1 text-lg">•</span>
                <span>Face prohibitive commissions from physical galleries (often 40-50%).</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-brand-fuchsia mt-1 text-lg">•</span>
                <span>Lack the tools to manage sales, shipping, and payments securely.</span>
              </li>
            </ul>
          </div>

          {/* Buyer Pain */}
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-brand-cyan/30 transition-all group hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cyan-100 p-4 rounded-2xl text-brand-teal group-hover:scale-110 transition-transform shadow-inner">
                <SearchX size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For The Collector</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3 items-start">
                <span className="text-brand-teal mt-1 text-lg">•</span>
                <span>Simultaneously, art lovers, collectors, and tourists lack a trusted, single platform.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-brand-teal mt-1 text-lg">•</span>
                <span>Difficult to discover, connect with, and purchase authentic Sri Lankan art.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-brand-teal mt-1 text-lg">•</span>
                <span>Uncertainty regarding provenance, shipping, and price transparency.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Consequence */}
        <div className="bg-gradient-to-r from-brand-dark via-slate-900 to-indigo-950 rounded-3xl p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl ring-1 ring-white/10">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-violet/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse-slow"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h3 className="text-3xl font-serif font-bold">The Economic & Cultural Cost</h3>
            <p className="text-gray-300 text-xl leading-relaxed font-light">
              This disconnect results in a significant loss of economic opportunity for artists and a missed chance for Sri Lanka to project its unique cultural identity on the world stage.
            </p>
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-6">
              <p className="text-brand-orange font-bold text-sm uppercase tracking-widest">Our Solution</p>
              <div className="flex items-center gap-3 text-2xl font-serif italic text-white">
                <span>Social Media Discovery</span>
                <span className="not-italic text-brand-fuchsia bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-base shadow-inner">+</span>
                <span>Secure Marketplace</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};