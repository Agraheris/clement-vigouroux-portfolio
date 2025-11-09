'use client';

import React, { useEffect, useState } from 'react';

const rotatingTexts = [
  "Développeur accessible",
  "Expert en inclusion numérique",
];


export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);


  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fff9ec] via-[#f0fdfa] to-[#ecfdf5] 
                        flex items-center justify-center px-4 py-20 relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#14B8A6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#059669]/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 
                        text-[#14B8A6] font-medium text-sm mb-8 transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
          <div className="w-2 h-2 bg-[#14B8A6] rounded-full mr-2 animate-pulse"></div>
          Recherche Alternance CDA 2025
        </div>

        <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
          Clément <span className="text-[#14B8A6]">Vigouroux</span>
        </h1>

        <div className={`text-xl md:text-2xl text-gray-700 mb-4 h-8 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
          <span className="text-[#F59E0B] font-semibold inline-block min-w-[280px] text-left">
            {rotatingTexts[currentText]}
          </span>
        </div>

        <p className={`text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-600 ${
             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
           }`}>
          Développeur web spécialisé en accessibilité numérique. Je crée des solutions pour que 
          <span className="font-medium text-[#059669]"> l'accessibilité soit transparente, pas optionnelle</span>.
        </p>


        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-800 ${
               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
             }`}>

<a 
  href="/cv-clement-vigouroux.pdf" 
  download="CV-Clement-Vigouroux.pdf"
  className="group border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white 
             px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 
             transform hover:scale-105 flex items-center gap-2"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
  Mon CV
</a>

        </div>

        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
             }`}>
        </div>

      </div>
    </section>
  );
}