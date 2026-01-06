import React from 'react';
import { Palette, Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 group cursor-pointer">
               <img 
                 src="/images/soliasartlogo.png" 
                 alt="SoliasArt" 
                 className="h-12 w-auto transition-all duration-300"
                 />
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              Reimagining the art market through technology. We empower artists and connect collectors with the soul of Sri Lankan creativity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-art-900 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-art-900 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-art-900 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-art-900 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-art-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-art-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-art-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-art-500 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-art-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-art-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-art-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-art-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-art-500 transition-colors">Artist Agreement</a></li>
              <li><a href="#" className="hover:text-art-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} SoliasArt Technologies Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};