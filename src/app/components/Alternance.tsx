import React from 'react'

function Alternance() {
  return (
    <section className="bg-[#f0f6f3] px-4 py-8 text-gray-800 text-sm">
      <h2 className="text-lg font-bold text-center text-[#1d7d7d] mb-6">
        Alternance CDA 2025 : mes objectifs
      </h2>

      <div className="max-w-md mx-auto space-y-6">
        {/* Ce que j'apporte */}
        <div>
          <h3 className="font-semibold text-md mb-2 text-[#0e3a3a]">Ce que j’apporte :</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Compréhension solide des enjeux d'accessibilité</li>
            <li>Expérience pratique avec auto-a11y</li>
            <li>Capacité à identifier les problèmes WCAG</li>
            <li>Motivation forte pour l'inclusion numérique</li>
          </ul>
        </div>

        {/* Ce que je veux apprendre */}
        <div>
          <h3 className="font-semibold text-md mb-2 text-[#0e3a3a]">Ce que je veux apprendre :</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Travailler sur de vrais produits avec contraintes business</li>
            <li>Approfondir les aspects juridiques et conformité</li>
            <li>Apprendre à former et sensibiliser les équipes</li>
            <li>Structurer mon expertise avec un titre CDA</li>
          </ul>
        </div>

        {/* Entreprise recherchée */}
        <div>
          <h3 className="font-semibold text-md mb-2 text-[#0e3a3a]">Entreprise recherchée :</h3>
          <p>
            Startup ou PME avec des enjeux d'accessibilité, sur la région de Montpellier ou toute la France.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Alternance
