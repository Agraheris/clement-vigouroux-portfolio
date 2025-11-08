import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import WhyA11y from "./components/WhyA11y"
import Alternance from "./components/Alternance"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="space-y-16 pb-16">
      <Hero />
      <Skills />
      <Projects />
      <WhyA11y />
      <Alternance />
      <Contact />
      </main>
    </div>
  )
}