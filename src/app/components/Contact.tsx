import React from 'react'

function Contact() {
  return (
    <section>
        <h2>Contact</h2>
        <div>
            <h3>Alternance CDA 2025</h3>
            <p>Votre équipe recherche un alternant spécialisé accessibilité?</p>
            <button type="button" aria-label="Contactez moi"> Ecrivez Moi</button>
        </div>
        <div>
            <h3>Échangeons sur l'a11y</h3>
            <p>Discussions techniques, partage d'expérience, networking</p>
            <button type="button" aria-label="rejoignez moi sur LinkedIn"> LinkedIn</button>
        </div>
    </section>
  )
}

export default Contact