import React from 'react'

function Skills() {
  return (
    <section className="bg-[#fff9ec] px-4 py-8 text-gray-800">
      {/* Hard Skills */}
      <h2 className="text-lg font-bold text-[#000000] mb-4">Hard Skills :</h2>

      <div className="space-y-6">
        {/* Dev */}
        <div>
          <h3 className="font-semibold text-md mb-1">Développement</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Javascript ES6+</li>
            <li>HTML/CSS</li>
          </ul>
        </div>

        {/* Accessibilité */}
        <div>
          <h3 className="font-semibold text-md mb-1">Accessibilité</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>WCAG 2.1</li>
            <li>ARIA</li>
            <li>Screen readers</li>
            <li>Keyboard navigation</li>
          </ul>
        </div>

        {/* Outils */}
        <div>
          <h3 className="font-semibold text-md mb-1">Outils & Workflow</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Git/GitHub</li>
            <li>Testing (Jest)</li>
            <li>Lighthouse</li>
          </ul>
        </div>
      </div>

      {/* Soft Skills */}
      <h2 className="text-lg font-bold text-[#000000] mt-8 mb-4">Soft Skills :</h2>

      <ul className="list-disc list-inside text-sm space-y-1">
        <li>Problem-solving</li>
        <li>Empathie</li>
        <li>Collaboration</li>
        <li>Veille technologique</li>
        <li>Communication technique</li>
        <li>Organisation & rigueur</li>
      </ul>
    </section>
  )
}

export default Skills
