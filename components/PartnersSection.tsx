import React from 'react';
import { Partner } from '../types';
import { Building2, Truck, Cpu, Network, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';

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
  switch (type) {
    case 'Gallery': return <Building2 size={32} />;
    case 'Logistics': return <Truck size={32} />;
    case 'Technology': return <Cpu size={32} />;
    case 'Strategic': return <GraduationCap size={32} />;
  }
}

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-white border-t border-brand-orange/10 relative overflow-hidden">
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
                <div className="w-20 h-20 bg-gradient-to-br from-white to-slate-50 rounded-full flex items-center justify-center text-brand-dark mb-6 shadow-inner border border-white group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
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

        {/* Get in Touch Section */}
        <div className="mt-20 bg-white rounded-3xl p-12 relative overflow-hidden shadow-xl border border-black">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-orange mb-4">Connect with Us</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
                Have questions, ideas, or interested in partnering with us? Reach out and our team will get back to you shortly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
              {/* Email Card */}
              <div className="group bg-white hover:bg-slate-50 border border-brand-orange rounded-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-black/5 text-brand-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <h3 className="text-brand-dark font-bold text-lg mb-2">Email Us</h3>
                <p className="text-gray-500 text-sm mb-4">For general inquiries and support</p>
                <a href="mailto:soliasartsrilanka@gmail.com" className="text-brand-dark hover:text-black font-semibold text-sm transition-colors break-all underline">
                  soliasartsrilanka@gmail.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="group bg-white hover:bg-slate-50 border border-brand-orange rounded-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-black/5 text-brand-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} />
                </div>
                <h3 className="text-brand-dark font-bold text-lg mb-2">Call Us</h3>
                <p className="text-gray-500 text-sm mb-4">Speak directly with our team</p>
                <a href="tel:+94740949290" className="text-brand-dark hover:text-black font-semibold text-sm transition-colors underline">
                  +94 74 094 9290
                </a>
              </div>

              {/* Address Card */}
              <div className="group bg-white hover:bg-slate-50 border border-brand-orange rounded-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-black/5 text-brand-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <h3 className="text-brand-dark font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-500 text-sm mb-4">Our Colombo Headquarters</p>
                <p className="text-brand-dark font-semibold text-sm">
                  No. 45, Galle Road, Colombo 03, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};