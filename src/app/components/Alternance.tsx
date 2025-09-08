'use client';

import React, { useState, useEffect } from 'react';

const skills = [
  "Compréhension solide des enjeux d'accessibilité",
  "Expérience pratique avec auto-a11y",
  "Capacité à identifier les problèmes WCAG",
  "Motivation forte pour l'inclusion numérique"
];

const objectives = [
  "Travailler sur de vrais produits avec contraintes business",
  "Approfondir les aspects juridiques et conformité",
  "Apprendre à former et sensibiliser les équipes",
  "Structurer mon expertise avec un titre CDA"
];

const companyTypes = [
  {
    type: "Startup tech",
    description: "Avec enjeux d'accessibilité et volonté d'innovation",
    icon: "🚀",
    color: "#14B8A6"
  },
  {
    type: "PME digitale", 
    description: "Sensibilisée à l'inclusion numérique",
    icon: "🏢",
    color: "#F59E0B"
  },
  {
    type: "Secteur public",
    description: "Obligations RGAA et mission d'accessibilité",
    icon: "🏛️",
    color: "#059669"
  }
];

export default function AlternanceSection() {
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

    const section = document.getElementById('alternance-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="alternance-section"
      className="py-12 md:py-20 bg-gradient-to-b from-[#fff9ec] to-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        <div className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-[#14B8A6] font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-[#14B8A6] rounded-full mr-2 animate-pulse"></span>
            Recherche active
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Alternance <span className="text-[#14B8A6]">CDA 2025</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recherche d'une alternance <span className="font-semibold text-[#F59E0B]">Concepteur Développeur d'Applications</span> pour 
            approfondir mon expertise en accessibilité web au sein d'une équipe engagée.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  💪
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Ce que j'apporte
                </h3>
              </div>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-[#14B8A6]/5 rounded-lg border border-[#14B8A6]/10"
                  >
                    <div className="w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      ✓
                    </div>
                    <span className="text-gray-700 leading-relaxed">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#14B8A6]/10 to-[#059669]/10 rounded-xl border border-[#14B8A6]/20">
                <h4 className="font-semibold text-gray-900 mb-3">Mon profil unique :</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Développeur avec une spécialisation rare en accessibilité web, 
                  motivé par une expérience personnelle et une vision d'innovation technique.
                </p>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Mes objectifs
                </h3>
              </div>
              
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-[#F59E0B]/5 rounded-lg border border-[#F59E0B]/10"
                  >
                    <div className="w-6 h-6 bg-[#F59E0B] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed">{objective}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#F59E0B]/10 to-[#D97706]/10 rounded-xl border border-[#F59E0B]/20">
                <h4 className="font-semibold text-gray-900 mb-3">Vision long terme :</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Devenir un expert reconnu en accessibilité web et contribuer à 
                  démocratiser les bonnes pratiques dans l'écosystème tech français.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className={`mb-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Entreprises recherchées
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {companyTypes.map((company, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
                style={{ borderTop: `4px solid ${company.color}` }}
              >
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{company.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ color: company.color }}>
                    {company.type}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {company.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 mb-16 transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#059669] rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">📍</div>
              <h4 className="text-xl font-bold">Localisation</h4>
            </div>
            <p className="text-lg mb-4">Montpellier et région</p>
            <p className="text-sm opacity-90">
              Ouvert au télétravail partiel et aux déplacements ponctuels. 
              Mobilité géographique envisageable pour la bonne opportunité.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">📅</div>
              <h4 className="text-xl font-bold">Disponibilité</h4>
            </div>
            <p className="text-lg mb-4">Septembre 2025</p>
            <p className="text-sm opacity-90">
              Rythme d'alternance flexible selon les besoins de l'entreprise. 
              Formation CDA de 12 à 24 mois.
            </p>
          </div>

        </div>

        <div className={`text-center transform transition-all duration-1000 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Vous portez des enjeux d'accessibilité ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discutons de la façon dont je peux contribuer à vos projets 
              tout en développant mon expertise dans un environnement professionnel stimulant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#14B8A6] hover:bg-[#0D9488] text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Me contacter
              </button>
              
              <button className="border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger CV
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}