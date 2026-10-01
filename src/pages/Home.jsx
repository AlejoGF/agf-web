import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Experience from '../sections/Experience.jsx'
import Education from '../sections/Education.jsx'
import Skills from '../sections/Skills.jsx'
import Projects from '../sections/Projects.jsx'
import Contact from '../sections/Contact.jsx'

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
