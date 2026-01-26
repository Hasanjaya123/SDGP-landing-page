import React, { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'The Why', href: '#problem' },
    { name: 'Features', href: '#features' },
    { name: 'Team', href: '#team' },
    { name: 'Partners', href: '#partners' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {

      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <img 
            src="/images/soliasartlogo.png" 
            alt="SoliasArt" 
            className="h-12 w-auto transition-all duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-sm font-medium text-gray-600 hover:text-black transition-colors uppercase tracking-wider cursor-pointer font-sans group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-black text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-gray-900 hover:scale-105 transition-all transform border border-transparent">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black hover:text-gray-700 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl p-6 flex flex-col gap-6 animate-fade-in-down z-40">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl font-serif font-medium text-gray-800 cursor-pointer hover:text-black hover:pl-2 transition-all"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-black text-white py-4 rounded-xl font-bold shadow-lg hover:bg-gray-900">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};