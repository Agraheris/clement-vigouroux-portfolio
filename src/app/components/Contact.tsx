import React from 'react'

function Contact() {
  return (
    <section className="bg-[#fff9ec] px-4 py-8 text-gray-800 text-sm">
      <h2 className="text-lg font-bold text-center text-[#1d7d7d] mb-6">
        Contact
      </h2>

      <div className="max-w-md mx-auto space-y-6">
        <div className="bg-white rounded-md shadow-sm p-4 space-y-2">
          <h3 className="font-semibold text-md text-[#0e3a3a]">
            Alternance CDA 2025
          </h3>
          <p>Votre équipe recherche un alternant spécialisé accessibilité ?</p>
        </div>

        <div className="bg-white rounded-md shadow-sm p-4 space-y-2">
          <h3 className="font-semibold text-md text-[#0e3a3a]">
            Échangeons sur l'a11y
          </h3>
          <p>Discussions techniques, partage d'expérience, networking</p>
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-vigouroux-41b23a151/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rejoignez-moi sur LinkedIn"
            className="mt-2 inline-block bg-[#1d7d7d] text-white px-4 py-2 rounded-md hover:bg-[#166666] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
