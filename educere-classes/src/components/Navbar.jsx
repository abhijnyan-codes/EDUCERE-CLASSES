import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll past 50px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-brand-navy/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 cursor-pointer"
          >
            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-white' : 'text-brand-navy'
            }`}>
              EDUCERE<span className="text-brand-orange">.</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-bold transition-colors duration-500 relative group ${
                  scrolled ? 'text-gray-300 hover:text-white' : 'text-brand-navy/70 hover:text-brand-navy'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full"></span>
              </a>
            ))}
            <button className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-500 ${
              scrolled 
                ? 'bg-brand-orange/10 border border-brand-orange/50 text-brand-orange hover:bg-brand-orange hover:text-white'
                : 'bg-brand-orange border border-brand-orange text-white hover:bg-orange-600 shadow-lg'
            }`}>
              Apply for 2026
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors duration-500 ${
              scrolled ? 'text-white' : 'text-brand-navy'
            }`}>
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
          scrolled ? 'bg-brand-navy border-b border-white/10 shadow-2xl' : 'bg-[#FAFAFA] border-b border-gray-200 shadow-lg'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`block px-3 py-3 text-base font-semibold rounded-md transition-colors ${
                  scrolled 
                    ? 'text-gray-300 hover:text-white hover:bg-white/5' 
                    : 'text-brand-navy/80 hover:text-brand-navy hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-4">
              <button className="w-full bg-brand-orange text-white px-4 py-3 rounded-md font-bold text-center shadow-md hover:bg-orange-600 transition-colors">
                Apply for 2026
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;