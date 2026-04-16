import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Research', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner site-shell">
        <div className="nav-main">
          <div className="nav-logo">MRA<span>.</span></div>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {links.map(l => (
              <li key={l}><button onClick={() => scrollTo(l)}>{l}</button></li>
            ))}
          </ul>
        </div>
        <a href="mailto:arreglo44@gmail.com" className="nav-cta">Hire Me</a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
