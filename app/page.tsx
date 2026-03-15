import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <canvas id="bg-canvas" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
      <div className="grid-bg" />
      <div className="orb1" />
      <div className="orb2" />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </div>
    </main>
  )
}