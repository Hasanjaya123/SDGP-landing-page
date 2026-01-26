import React from 'react';
import { Partner } from '../types';
import { Building2, Truck, Cpu, Network, GraduationCap } from 'lucide-react';

const partners: Partner[] = [
  {
    id: '1',
    name: 'Informatics Institute of Technology',
    type: 'Strategic',
    description: 'Our exclusive academic partner and incubator.',
    logoUrl: ''
  }
];

const getPartnerIcon = (type: Partner['type']) => {
    switch(type) {
        case 'Gallery': return <Building2 size={32} />;
        case 'Logistics': return <Truck size={32} />;
        case 'Technology': return <Cpu size={32} />;
        case 'Strategic': return <GraduationCap size={32} />;
    }
}

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-brand-cream border-t border-brand-orange/10 relative overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-brand-gold/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-brand-cyan/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-2 block">The Ecosystem</span>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">Strategic Partnerships</h2>
        </div>

        <div className="flex justify-center gap-6">
          {partners.map((partner) => (
            <div key={partner.id} className="w-full md:w-1/2 lg:w-1/4">
                <div className="group bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-brand-orange/5 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-brand-fuchsia/10 transition-all hover:-translate-y-2 duration-300 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-white to-brand-cream rounded-full flex items-center justify-center text-brand-dark mb-6 shadow-inner border border-white group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-fuchsia/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="text-brand-orange relative z-10">
                        {getPartnerIcon(partner.type)}
                    </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{partner.name}</h3>
                <span className="px-3 py-1 bg-white border border-gray-100 text-xs font-bold text-gray-500 rounded-full mb-4 uppercase shadow-sm">{partner.type}</span>
                <p className="text-sm text-gray-500">{partner.description}</p>
                </div>
            </div>
          ))}
        </div>

        {/* Updated Banner to Black */}
        <div className="mt-20 bg-black rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Join the Art Revolution</h2>
             <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
               We are currently accepting applications for new gallery partners and strategic investors for our upcoming Series A.
             </p>
             <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all shadow-lg transform hover:scale-105 duration-300">
               Contact Us
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};