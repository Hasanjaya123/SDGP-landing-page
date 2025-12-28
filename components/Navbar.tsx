import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Handle Scroll State
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Prevent Body Scroll when Mobile Menu is open (Fixes "Scroll Leak")
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'The Why', href: '#problem' },
    { name: 'Features', href: '#features' },
    { name: 'Team', href: '#team' },
    { name: 'Partners', href: '#partners' },
  ];

  // 3. Simplified Click Handler
  // We rely on CSS 'scroll-padding-top' for the offset now.
  // It's smoother and less buggy than manual JS calculation.
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* This global style ensures that when you click a link, 
         the browser automatically stops scrolling BEFORE the navbar covers the text.
         90px gives you a nice breathing room below the fixed header.
      */}
      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 90px; 
        }
      `}</style>

      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img 
              src="/images/soliasartlogo.png" 
              alt="SoliasArt" 
              className="h-10 md:h-12 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Nav 
             CHANGED: 'md:flex' to 'lg:flex'. 
             On tablets (md), this menu is too wide and causes "overextending" / wrapping.
             Switching to lg keeps it clean on tablets by showing the hamburger menu instead.
          */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
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

          {/* Mobile Toggle 
             CHANGED: 'md:hidden' to 'lg:hidden' to match the change above.
          */}
          <button 
            className="lg:hidden text-black hover:text-gray-700 transition-colors z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 animate-fade-in">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={handleNavClick}
                className="text-2xl font-serif font-medium text-gray-800 cursor-pointer hover:text-black hover:scale-110 transition-all"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-4 bg-black text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-900">
              Login
            </button>
          </div>
        )}
      </nav>
    </>
  );
};