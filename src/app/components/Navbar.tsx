import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-[#1d7d7d] text-white">

      <Image 
        src="/images/logo.webp" 
        alt="logo" 
        width={40}
        height={40} 
        className="rounded-full"
      />

      <ul className="flex gap-4 text-sm font-medium">
        <li className="hover:underline cursor-pointer">Portfolio</li>
        <li className="hover:underline cursor-pointer">Alternance CDA</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
