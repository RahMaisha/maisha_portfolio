import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Skills from '@/components/Skills'
import Hackathon from '@/components/Hackathon'
import Volunteering from '@/components/Volunteering'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Hackathon />
      <Volunteering />
      <Contact />
    </main>
  )
}
