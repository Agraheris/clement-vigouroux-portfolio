'use client';

import React, { useState, useEffect } from 'react';

const contactMethods = [
  {
    icon: "📧",
    title: "Email professionnel",
    value: "clement.vigouroux@gmail.com",
    link: "mailto:clement.vigouroux@gmail.com",
    color: "#14B8A6"
  },
  {
    icon: "💼",
    title: "LinkedIn",
    value: "Clément Vigouroux",
    link: "https://www.linkedin.com/in/cl%C3%A9ment-vigouroux-41b23a151/",
    color: "#0077B5"
  },
  {
    icon: "🐙",
    title: "GitHub",
    value: "@Agraheris",
    link: "https://github.com/Agraheris",
    color: "#181717"
  },
  {
    icon: "🌐",
    title: "Site web",
    value: "clem-it.fr",
    link: "https://www.clem-it.fr/",
    color: "#F59E0B"
  }
];

const quickFacts = [
  { label: "Localisation", value: "Montpellier, France", icon: "📍" },
  { label: "Disponibilité", value: "Septembre 2025", icon: "📅" },
  { label: "Statut", value: "Recherche alternance", icon: "🎯" },
  { label: "Spécialité", value: "Accessibilité web", icon: "♿" }
];

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('contact-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:clement.vigouroux@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nEntreprise: ${formData.company}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section 
      id="contact-section"
      className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        <div className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#059669]/10 border border-[#059669]/20 text-[#059669] font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-[#059669] rounded-full mr-2 animate-pulse"></span>
            Prenons contact
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Parlons de votre <span className="text-[#059669]">projet</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une question sur l'accessibilité web ? Un projet à discuter ? Une opportunité d'alternance ?<br />
            <span className="font-semibold text-[#F59E0B]">Je serais ravi d'échanger avec vous !</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className={`lg:col-span-2 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-sm">
                  ✉️
                </div>
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-colors resize-vertical placeholder:text-gray-600"                      
placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-colors placeholder:text-gray-600"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-colors placeholder:text-gray-600"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] text-gray-600 focus:border-transparent transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Alternance CDA">Alternance CDA</option>
                      <option value="Projet freelance">Projet freelance</option>
                      <option value="Question accessibilité">Question accessibilité</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-colors resize-vertica placeholder:text-gray-600 text-gray-600"
                    placeholder="Décrivez votre projet, vos besoins ou votre question..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#14B8A6] hover:bg-[#0D9488] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          <div className={`space-y-8 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Mes coordonnées</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="text-2xl">{method.icon}</div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 group-hover:text-[#14B8A6] transition-colors">
                        {method.title}
                      </div>
                      <div className="text-sm text-gray-600">{method.value}</div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#14B8A6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#14B8A6] to-[#059669] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-6">Informations pratiques</h3>
              
              <div className="space-y-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-xl">{fact.icon}</div>
                    <div>
                      <div className="font-medium opacity-90">{fact.label}</div>
                      <div className="text-sm opacity-75">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <p className="text-sm leading-relaxed">
                  <strong>Temps de réponse :</strong> Je réponds généralement sous 24h aux messages professionnels.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 text-center">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mon CV complet</h3>
              <p className="text-sm text-gray-600 mb-4">
                Téléchargez mon CV pour plus de détails sur mon parcours et mes compétences.
              </p>
              <button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger CV
              </button>
            </div>

          </div>
        </div>

        <div className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-[#fff9ec] to-white rounded-2xl p-8 border border-[#F59E0B]/20">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Créons ensemble un web plus accessible ! 🌟
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Que ce soit pour un projet freelance, une alternance ou simplement échanger sur l'accessibilité web, 
              n'hésitez pas à me contacter. Chaque conversation est une opportunité d'apprendre et de progresser.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}