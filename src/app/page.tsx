import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import AutoA11y from "./components/AutoA11y"
import WhyA11y from "./components/WhyA11y"
import Alternance from "./components/Alternance"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <AutoA11y />
      <WhyA11y />
      <Alternance />
      <Contact />
      <h1>Portfolio Clément en construction</h1>
    </div>
  )
}