import React from "react";

function AutoA11y() {
  return (
    <section>
      <h2>Auto-a11y , l'accessibilité automatique</h2>
      <p>
        Bibliothèque React développée en TypeScript où l'accessibilité est
        automatique, pas optionnelle. Propose des composants avec ARIA
        attributes intégrés, navigation clavier native et conformité WCAG 2.1 AA
        immédiate.
      </p>
      <ul>
        <li>Zéro configuration, Accessibilité transparente pour les développeurs</li>
        <li>WCAG 2.1 AA Conformité immédiate sans effort manuel</li>
        <li>ARIA intégré, Navigation clavier et lecteurs d'écran natif</li>
      </ul>
      <button type="button" aria-label="Voir le projet auto-a11y sur GitHub">
        Voir sur GitHub
      </button>
    </section>
  );
}

export default AutoA11y;
