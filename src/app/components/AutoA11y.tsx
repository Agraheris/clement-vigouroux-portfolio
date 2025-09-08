'use client';

import React, { useState, useEffect } from 'react';

const codeExample = `// Concept : API simple pour développeurs
import { Button, Input, Form } from 'auto-a11y';

function LoginForm() {
  return (
    <Form>
      <Input 
        label="Email"
        type="email"
        required
        // ✨ ARIA automatique
        // ✨ Validation accessible
        // ✨ Messages d'erreur liés
      />
      <Button type="submit">
        Se connecter
        // ✨ Focus management auto
        // ✨ Screen reader ready
        // ✨ États loading accessibles
      </Button>
    </Form>
  );
}

// Résultat : 100% accessible sans effort`;

export default function AutoA11ySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Réduit le threshold pour mobile
    );

    const section = document.getElementById('auto-a11y-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="auto-a11y-section"
      className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-[#14B8A6] font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-[#14B8A6] rounded-full mr-2 animate-pulse"></span>
            Concept en développement
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            auto-<span className="text-[#14B8A6]">a11y</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Concept innovant d'une bibliothèque React où <span className="font-semibold text-[#F59E0B]">l'accessibilité serait automatique</span>, 
            pas optionnelle. L'idée : des composants avec ARIA attributes intégrés, navigation clavier native 
            et conformité WCAG 2.1 AA immédiate, sans configuration développeur.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left: Problem & Vision */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Le <span className="text-[#F59E0B]">problème</span> à résoudre
            </h3>
            
            <div className="space-y-6">
              <div className="p-4 md:p-6 bg-red-50 rounded-xl border border-red-100">
                <h4 className="text-lg md:text-xl font-semibold text-red-800 mb-3 flex items-center gap-2">
                  ❌ Situation actuelle
                </h4>
                <ul className="space-y-2 text-sm md:text-base text-red-700">
                  <li>• L'accessibilité est souvent oubliée ou traitée après coup</li>
                  <li>• Les développeurs doivent apprendre ARIA, WCAG, etc.</li>
                  <li>• Chaque composant nécessite une implémentation manuelle</li>
                  <li>• Tests d'accessibilité complexes et chronophages</li>
                </ul>
              </div>

              <div className="p-4 md:p-6 bg-green-50 rounded-xl border border-green-100">
                <h4 className="text-lg md:text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                  ✅ Vision auto-a11y
                </h4>
                <ul className="space-y-2 text-sm md:text-base text-green-700">
                  <li>• Accessibilité intégrée par défaut dans chaque composant</li>
                  <li>• API simple, développeur n'a rien à apprendre</li>
                  <li>• Conformité WCAG automatique</li>
                  <li>• Focus management et ARIA gérés en interne</li>
                </ul>
              </div>
            </div>

            {/* Roadmap */}
            <div className="mt-8 p-4 md:p-6 bg-gradient-to-r from-[#14B8A6]/5 to-[#059669]/5 rounded-xl border border-[#14B8A6]/20">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🚀 Roadmap de développement
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#14B8A6] rounded-full"></div>
                  <span className="text-sm md:text-base text-gray-700">Recherche et conception API</span>
                  <span className="text-xs bg-[#14B8A6] text-white px-2 py-1 rounded-full">En cours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-sm md:text-base text-gray-500">Développement composants de base</span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">À venir</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-sm md:text-base text-gray-500">Tests automatisés d'accessibilité</span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">À venir</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Code Example */}
          <div className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 md:px-6 py-3 md:py-4 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-xs md:text-sm font-mono">LoginForm.tsx</span>
              </div>

              {/* Code Content */}
              <div className="p-4 md:p-6 overflow-x-auto">
                <pre className="text-xs md:text-sm text-gray-300 font-mono leading-relaxed">
                  <code dangerouslySetInnerHTML={{ __html: 
                    codeExample
                      .replace(/import/g, '<span class="text-purple-400">import</span>')
                      .replace(/from/g, '<span class="text-purple-400">from</span>')
                      .replace(/function/g, '<span class="text-blue-400">function</span>')
                      .replace(/return/g, '<span class="text-purple-400">return</span>')
                      .replace(/type=/g, '<span class="text-green-400">type</span>=')
                      .replace(/required/g, '<span class="text-yellow-400">required</span>')
                      .replace(/\/\/ ✨.*$/gm, '<span class="text-green-400">$&</span>')
                      .replace(/'([^']*)'/g, '<span class="text-amber-400">\'$1\'</span>')
                      .replace(/"([^"]*)"/g, '<span class="text-amber-400">"$1"</span>')
                  }} />
                </pre>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-6 bg-gradient-to-r from-[#14B8A6]/10 to-[#059669]/10 rounded-xl p-4 md:p-6 border border-[#14B8A6]/20">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-[#14B8A6]">🔬</span>
                Recherche & Concept
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full"></span>
                  API intuitive pour les développeurs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full"></span>
                  Accessibilité transparente et automatique
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#059669] rounded-full"></span>
                  Conformité WCAG intégrée
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full"></span>
                  Zéro configuration développeur
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Quote Section - Hidden on mobile */}
        <div className={`mt-16 md:mt-20 text-center transform transition-all duration-1000 delay-800 hidden md:block ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed">
            "Le web est plus facile à rendre accessible qu'un vieil immeuble"
          </blockquote>
          <cite className="block mt-4 text-[#14B8A6] font-semibold">
            — Ma philosophie du développement inclusif
          </cite>
        </div>

      </div>
    </section>
  );
}