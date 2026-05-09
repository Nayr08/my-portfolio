import { useEffect } from 'react'
import Navbar from './navbar'
import Hero from './hero'
import About from './about'
import Projects from './projects'
import Skills from './skills'
import Certificates from './certificates'
import Contact from './contact'
import Footer from './footer'
import Cursor from './cursor'
import './App.css'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
