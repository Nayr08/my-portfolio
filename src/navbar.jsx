import { useEffect, useState } from 'react'
import './navbar.css'

const links = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionElements = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    )

    sectionElements.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(id)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-inner site-shell">
        <div className="nav-main">
          <button className="nav-logo" onClick={() => scrollTo('hero')} aria-label="Go to home section">
            MRA<span>.</span>
          </button>
          <ul id="site-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {links.map((link, index) => (
              <li
                key={link.id}
                className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
                style={{ '--nav-index': index }}
              >
                <button
                  onClick={() => scrollTo(link.id)}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <a href="mailto:arreglo44@gmail.com" className="nav-cta">Hire Me</a>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile-backdrop ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
    </nav>
  )
}
