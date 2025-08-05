import React from 'react'

function WhyA11y() {
  return (
    <section className="bg-white px-4 py-8 text-gray-800 text-sm">
      <h2 className="text-lg font-bold text-center text-[#1d7d7d] mb-4">
        Pourquoi l'accessibilité m'anime
      </h2>

      <div className="max-w-md mx-auto space-y-4">
        <p>
          Ma compagne est en situation de handicap moteur. Voyant les difficultés d'accessibilité physique du quotidien, je me suis dit : <span className="italic">le web, c'est plus facile à rendre accessible qu'un vieil immeuble !</span>
        </p>

        <p>
          Cette prise de conscience m'a motivé à me spécialiser dans l'accessibilité numérique. Mon objectif : <span className="font-medium">faire du web un espace véritablement inclusif</span>.
        </p>

        <blockquote className="text-center italic text-[#1d7d7d] font-semibold mt-6">
          “Le web est plus facile à rendre accessible qu'un vieil immeuble”
        </blockquote>
      </div>
    </section>
  )
}

export default WhyA11y
