'use client';

import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "Le Papillon Énergétique",
    category: "Professional",
    type: "Projet Client",
    description: "Refonte complète d'un site Wix en solution moderne Next.js avec CMS Sanity pour une praticienne en soins énergétiques. Premier projet de ma micro-entreprise.",
    features: [
      "CMS Sanity intégré pour autonomie client",
      "Performance optimisée vs solution no-code",
      "SEO et Core Web Vitals optimisés",
      "Interface responsive et accessible"
    ],
    tech: ["Next.js 14", "React", "Sanity CMS", "Tailwind CSS", "TypeScript"],
    status: "Terminé",
    statusColor: "#059669",
    duration: "2 semaines",
    github: "https://github.com/Agraheris/les-papillons-energetiques",
    color: "#14B8A6"
  },
  {
    id: 2,
    title: "Virtuart",
    category: "Academic",
    type: "Projet 3 - WCS",
    description: "Plateforme artistique full-stack collaborative permettant aux artistes de publier et partager leurs œuvres. Projet final de formation avec équipe de 4 développeurs.",
    features: [
      "Upload d'images haute résolution",
      "Galerie Masonry avec disposition dynamique",
      "Système de likes et commentaires",
      "Authentification JWT sécurisée"
    ],
    tech: ["React", "Express.js", "MySQL", "Node.js", "JWT", "Multer"],
    status: "Terminé",
    statusColor: "#059669",
    duration: "6 semaines",
    github: "https://github.com/Agraheris/afac974",
    color: "#059669"
  },
  {
    id: 3,
    title: "MoodFlix",
    category: "Academic", 
    type: "Projet 2 - WCS",
    description: "Application de recommandation de films basée sur l'humeur. Hackathon en équipe avec API de films et algorithme de suggestion personnalisée.",
    features: [
      "Sélection d'humeur intuitive",
      "API films avec recommandations",
      "Gestion des favoris",
      "Interface responsive React"
    ],
    tech: ["React", "Express.js", "MySQL", "Node.js", "API REST"],
    status: "Terminé",
    statusColor: "#059669", 
    duration: "2 semaines",
    github: "https://github.com/Agraheris/JS-RemoteFR-CodeOfWar-P2-MoodFlix",
    color: "#F59E0B"
  },
  {
    id: 4,
    title: "Spice Odyssey",
    category: "Academic",
    type: "Projet 1 - WCS", 
    description: "Premier projet en équipe utilisant HTML, CSS et JavaScript vanilla. Application web avec interface responsive et validation HTML intégrée.",
    features: [
      "Interface responsive native",
      "JavaScript vanilla interactif", 
      "Validation HTML automatisée",
      "Design adaptatif multi-appareils"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "html-validator"],
    status: "Terminé",
    statusColor: "#059669",
    duration: "2 semaines", 
    github: "https://github.com/Agraheris/spice_odyssey",
    color: "#14B8A6"
  }
];

const techColors: Record<string, string> = {
  "Next.js 14": "#000000",
  "React": "#61DAFB", 
  "TypeScript": "#3178C6",
  "Sanity CMS": "#F03E2F",
  "Tailwind CSS": "#06B6D4",
  "Express.js": "#000000",
  "MySQL": "#4479A1",
  "Node.js": "#339933",
  "JWT": "#000000",
  "HTML5": "#E34F26",
  "CSS3": "#1572B6",
  "JavaScript": "#F7DF1E",
  "API REST": "#FF6B6B"
};

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['All', 'Professional', 'Academic'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projects-section"
      className="py-12 md:py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        <div className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-[#14B8A6] font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-[#14B8A6] rounded-full mr-2 animate-pulse"></span>
            Portfolio de projets
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Mes <span className="text-[#14B8A6]">réalisations</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De l'apprentissage à l'entrepreneuriat, découvrez mon évolution à travers des projets 
            <span className="font-semibold text-[#F59E0B]"> concrets et diversifiés</span>.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-[#14B8A6] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'All' ? 'Tous les projets' : 
               category === 'Professional' ? 'Professionnel' : 'Formation'}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${400 + index * 150}ms`,
                borderTop: `4px solid ${project.color}`
              }}
            >
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#14B8A6] transition-colors">
                        {project.title}
                      </h3>
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: project.statusColor }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="font-medium">{project.type}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Fonctionnalités clés :</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                        style={{
                          backgroundColor: techColors[tech] ? `${techColors[tech]}15` : undefined,
                          color: techColors[tech] || undefined
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#14B8A6] hover:bg-[#0D9488] text-white px-4 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center p-6 bg-gradient-to-br from-[#14B8A6]/10 to-[#059669]/10 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-[#14B8A6] mb-2">4</div>
            <div className="text-sm text-gray-600 font-medium">Projets réalisés</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#F59E0B]/10 to-[#D97706]/10 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-[#F59E0B] mb-2">8+</div>
            <div className="text-sm text-gray-600 font-medium">Technologies maîtrisées</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#059669]/10 to-[#047857]/10 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-[#059669] mb-2">1</div>
            <div className="text-sm text-gray-600 font-medium">Client professionnel</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#14B8A6]/10 to-[#0D9488]/10 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-[#14B8A6] mb-2">6 mois</div>
            <div className="text-sm text-gray-600 font-medium">D'apprentissage intensif</div>
          </div>
        </div>

      </div>
    </section>
  );
}