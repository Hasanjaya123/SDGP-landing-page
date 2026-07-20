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
    <nav className="fixed top-0 left-0 w-full z-50 p-5 pointer-events-none transition-all duration-300">
      <div
        className={`mx-auto max-w-5xl rounded-full border bg-white/90 backdrop-blur-md px-8 py-3.5 flex justify-between items-center transition-all duration-300 pointer-events-auto ${
          isScrolled 
            ? 'shadow-xl border-brand-orange/20 bg-white' 
            : 'shadow-lg border-gray-100 bg-white/90'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <img
            src="/images/soliasartlogo.png"
            alt="SoliasArt"
            className="h-12 w-auto transition-all duration-300"
          />
        </div>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-sm font-semibold text-gray-600 hover:text-black transition-colors uppercase tracking-wider cursor-pointer font-sans group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right CTA Button (Desktop) / Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://soliasart.com/login"
            className="hidden md:inline-block bg-[#E5B842] text-white px-8 py-3 rounded-full text-sm font-bold shadow-md hover:bg-[#D4A733] transition-colors no-underline uppercase tracking-wider"
          >
            Login
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-black hover:text-gray-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[80px] left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl p-6 flex flex-col gap-6 animate-fade-in-down z-40 pointer-events-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-sans font-medium text-gray-800 cursor-pointer hover:text-[#E5B842] hover:pl-2 transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://soliasart.com/login"
              className="w-full bg-[#E5B842] text-white py-3.5 rounded-xl font-bold shadow-lg hover:bg-[#D4A733] transition-colors text-center block no-underline uppercase tracking-wider text-sm"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};