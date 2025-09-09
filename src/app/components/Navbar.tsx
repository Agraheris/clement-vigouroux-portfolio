'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <Image 
              src="/images/logo.webp" 
              alt="Clément Vigouroux" 
              width={40}
              height={40} 
            />
            <div className={`font-bold text-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              Clément <span className="text-[#14B8A6]">VIGOUROUX</span>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button 
                onClick={() => scrollToSection('projects-section')}
                className={`font-medium transition-all duration-300 hover:text-[#14B8A6] relative group ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                Projets
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('alternance-section')}
                className={`font-medium transition-all duration-300 hover:text-[#14B8A6] relative group ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                Alternance CDA
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact-section')}
                className={`font-medium transition-all duration-300 hover:text-[#14B8A6] relative group ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          </ul>

          <div className="hidden md:block">
            <a 
              href="/cv-clement-vigouroux.pdf" 
              download="CV-Clement-Vigouroux.pdf"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <span>Télécharger CV</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu mobile"
          >
            <svg 
              className={`w-6 h-6 transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <ul className="space-y-4 pt-4">
              <li>
                <button 
                  onClick={() => scrollToSection('projects-section')}
                  className="block w-full text-left py-2 text-gray-700 hover:text-[#14B8A6] font-medium transition-colors"
                >
                  Projets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('alternance-section')}
                  className="block w-full text-left py-2 text-gray-700 hover:text-[#14B8A6] font-medium transition-colors"
                >
                  Alternance CDA
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact-section')}
                  className="block w-full text-left py-2 text-gray-700 hover:text-[#14B8A6] font-medium transition-colors"
                >
                  Contact
                </button>
              </li>
              <li className="pt-2">
                <a 
                  href="/cv-clement-vigouroux.pdf" 
                  download="CV-Clement-Vigouroux.pdf"
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Télécharger CV</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;