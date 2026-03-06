import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Education />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
