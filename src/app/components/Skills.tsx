'use client';

import React, { useState, useEffect } from 'react';

const skillsData = {
  development: [
    { name: 'Next.js', percentage: 90 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Javascript ES6+', percentage: 100 },
    { name: 'HTML/CSS', percentage: 95 },
  ],
  accessibility: [
    { name: 'WCAG 2.1', percentage: 80 },
    { name: 'ARIA', percentage: 85 },
    { name: 'Screen readers', percentage: 80 },
    { name: 'Keyboard navigation', percentage: 95 },
  ],
  tools: [
    { name: 'Git/GitHub', percentage: 100 },
    { name: 'Testing (Jest)', percentage: 70 },
    { name: 'Lighthouse', percentage: 100 },
  ]
};

const softSkills = [
  'Problem-solving',
  'Empathie',
  'Collaboration',
  'Veille technologique',
  'Communication technique',
  'Organisation & rigueur'
];

function SkillBar({ name, percentage, delay = 0, category = 'dev' }: {
  name: string;
  percentage: number;
  delay?: number;
  category?: 'dev' | 'a11y' | 'tools';
}) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  const getBarColor = () => {
    switch (category) {
      case 'dev':
        return '#14B8A6';
      case 'a11y':
        return '#F59E0B';
      case 'tools':
        return '#059669';
      default:
        return '#14B8A6';
    }
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-800">
          {name}
        </span>
        <span className="text-sm font-semibold text-gray-600">
          {percentage}%
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
          style={{ 
            width: `${animatedPercentage}%`,
            backgroundColor: getBarColor()
          }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            style={{
              animation: 'shimmer 2s infinite',
              transform: 'skewX(-20deg)'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
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

    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section 
        id="skills-section"
        className="bg-[#fff9ec] px-4 py-12 md:py-16 text-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          
          <div className={`mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-xl md:text-2xl font-bold text-[#000000] mb-8 text-center">
              Hard Skills
            </h2>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 border-l-4 border-[#14B8A6] shadow-sm transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h3 className="font-semibold text-lg mb-4 text-[#14B8A6] border-b border-[#14B8A6]/20 pb-2">
                  Développement
                </h3>
                <div className="space-y-3">
                  {skillsData.development.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={isVisible ? index * 200 + 800 : 0}
                      category="dev"
                    />
                  ))}
                </div>
              </div>

              <div className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 border-l-4 border-[#F59E0B] shadow-sm transform transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h3 className="font-semibold text-lg mb-4 text-[#F59E0B] border-b border-[#F59E0B]/20 pb-2">
                  Accessibilité
                </h3>
                <div className="space-y-3">
                  {skillsData.accessibility.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={isVisible ? index * 200 + 1200 : 0}
                      category="a11y"
                    />
                  ))}
                </div>
              </div>

              <div className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 border-l-4 border-[#059669] shadow-sm transform transition-all duration-1000 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h3 className="font-semibold text-lg mb-4 text-[#059669] border-b border-[#059669]/20 pb-2">
                  Outils & Workflow
                </h3>
                <div className="space-y-3">
                  {skillsData.tools.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={isVisible ? index * 200 + 1600 : 0}
                      category="tools"
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-xl md:text-2xl font-bold text-[#000000] mb-8 text-center">
              Soft Skills
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={`bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm 
                             px-6 py-4 rounded-xl text-center font-medium text-gray-700 
                             transform transition-all duration-500 hover:scale-105 hover:shadow-lg
                             border border-gray-200/50 hover:border-[#14B8A6]/30
                             hover:bg-gradient-to-r hover:from-[#14B8A6]/5 hover:to-[#059669]/5
                             ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{
                    transitionDelay: `${1000 + index * 100}ms`
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
      `}</style>
    </>
  );
}