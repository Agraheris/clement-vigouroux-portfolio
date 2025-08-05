import React from "react";

function AutoA11y() {
  return (
    <section className="bg-[#ccf4ee] px-4 py-8 text-gray-800 text-sm">
      <h2 className="text-lg font-bold text-center text-[#0e3a3a] mb-4">
        auto-a11y : <br className="block sm:hidden" />
        l'accessibilité automatique
      </h2>

      <p className="max-w-md mx-auto text-center mb-6">
        Bibliothèque React développée en TypeScript où l'accessibilité est
        automatique, pas optionnelle. Propose des composants avec ARIA
        attributes intégrés, navigation clavier native et conformité WCAG 2.1 AA
        immédiate.
      </p>

      <ul className="max-w-md mx-auto list-disc list-inside space-y-2 mb-6 text-left">
        <li>
          <span className="font-medium">Zéro configuration</span> – Accessibilité transparente pour les développeurs
        </li>
        <li>
          <span className="font-medium">WCAG 2.1 AA</span> – Conformité immédiate sans effort manuel
        </li>
        <li>
          <span className="font-medium">ARIA intégré</span> – Navigation clavier et lecteurs d'écran natifs
        </li>
      </ul>

      <div className="text-center">
   <a
          href="https://github.com/Agraheris/auto-a11y"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir le projet auto-a11y sur GitHub"
          className="inline-block bg-[#1d7d7d] text-white px-6 py-2 rounded-md hover:bg-[#166666] transition-colors"
        >
          Voir sur GitHub
        </a>
      </div>
    </section>
  );
}

export default AutoA11y;
