import React from 'react'

function Hero() {
  return (
    <section className="text-center px-4 py-8 bg-[#e6f9f7]">
      <h2 className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">
        Recherche Alternance CDA 2025
      </h2>

      <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
        Vigouroux Clément <br />
        <span className="text-lg font-medium text-gray-700">Créateur d’auto-a11y</span>
      </h1>

      <p className="text-sm text-gray-600 max-w-md mx-auto">
        Je développe des solutions pour que l'accessibilité web soit transparente, pas optionnelle.
      </p>
    </section>
  )
}

export default Hero
