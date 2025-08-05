import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <nav>
      <Image 
        src="/images/logo.webp" 
        alt="logo" 
        width={40}
        height={40} 
      />
      <ul>
        <li>Portfolio</li>
        <li>Alternance CDA</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar