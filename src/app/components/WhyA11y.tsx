'use client';

import React, { useState, useEffect } from 'react';

export default function WhyAccessibility() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('why-accessibility-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="why-accessibility-section"
      className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        
        <div className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-[#F59E0B] rounded-full mr-2 animate-pulse"></span>
            Histoire personnelle
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Pourquoi l'<span className="text-[#F59E0B]">accessibilité</span> m'anime
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  💡
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Une prise de conscience personnelle
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ma compagne est en situation de handicap moteur. En observant au quotidien 
                    les <span className="font-semibold text-[#F59E0B]">difficultés d'accessibilité physique</span> qu'elle rencontre, 
                    une évidence s'est imposée à moi.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#14B8A6]/5 to-[#059669]/5 rounded-xl p-6 border-l-4 border-[#14B8A6] mb-8">
              <blockquote className="text-lg md:text-xl font-medium text-gray-800 italic mb-4">
                "Le web, c'est plus facile à rendre accessible qu'un vieil immeuble !"
              </blockquote>
              <cite className="text-[#14B8A6] font-semibold">
                — Le déclic qui a tout changé
              </cite>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Constat quotidien</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Escaliers inaccessibles, portes trop étroites, absence d'ascenseurs... 
                    Le monde physique peut être un parcours du combattant.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#F59E0B] rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Opportunité numérique</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Contrairement aux bâtiments, le web peut être rendu accessible 
                    dès sa conception, sans coûts prohibitifs ni contraintes physiques.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#059669] rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mission personnelle</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Faire du web un espace véritablement inclusif où chacun peut 
                    naviguer, comprendre et interagir sans barrière.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Impact de l'accessibilité web
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">
                    👁️
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Déficience visuelle</div>
                    <div className="text-sm text-gray-600">Navigation au clavier, lecteurs d'écran</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">
                    🎯
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Troubles cognitifs</div>
                    <div className="text-sm text-gray-600">Interface claire, navigation simplifiée</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl">
                    ⚡
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Handicap moteur</div>
                    <div className="text-sm text-gray-600">Contrôles adaptés, zones de clic élargies</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl">
                    👂
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Déficience auditive</div>
                    <div className="text-sm text-gray-600">Sous-titres, transcriptions, signalétique</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-[#14B8A6]/10 to-[#059669]/10 rounded-lg border border-[#14B8A6]/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#14B8A6] mb-1">15%</div>
                  <div className="text-sm text-gray-700 font-medium">de la population mondiale</div>
                  <div className="text-xs text-gray-600 mt-1">vit avec un handicap</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className={`transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#059669] rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ma vision du développement inclusif
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Transparent</h4>
                <p className="text-sm opacity-90">
                  L'accessibilité ne doit pas être une option, mais intégrée dès la conception
                </p>
              </div>
              
              <div>
                <div className="text-3xl mb-3">🌍</div>
                <h4 className="font-semibold mb-2">Universel</h4>
                <p className="text-sm opacity-90">
                  Un web accessible profite à tous : handicap, âge, contexte d'usage
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                "Mon objectif : faire de l'accessibilité web une évidence technique, 
                pas une contrainte. Pour que chaque ligne de code contribue à un internet plus inclusif."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}