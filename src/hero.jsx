import './hero.css'
import GradPic from './assets/GradPic.png'

export default function Hero() {
  const credibilityItems = [
    'Full-stack + IoT + AI-assisted builder',
    'Open to remote work',
    'Strong experience with production-ready apps',
  ]

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-glow" />

      <div className="hero-inner site-shell">
        <div className="hero-left">
          <h1 className="hero-title">
            Full-Stack<br />
            <span className="hero-title-accent">Developer</span> for<br />
            AI &amp; IoT Products
          </h1>

          <p className="hero-sub">
            I help teams build production-ready platforms that connect modern web apps,
            AI-assisted features, and real-world devices. From backend architecture to
            polished frontend delivery, I build end-to-end with speed and care.
          </p>

          <div className="hero-btn-group">
            <a
              href="#projects"
              className="btn-primary hero-btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              View Projects &rarr;
            </a>
            <a href="mailto:arreglo44@gmail.com" className="btn-outline hero-btn-secondary">Get In Touch</a>
          </div>

        </div>

        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-glow" />
            <div className="hero-card-top">
              <div className="hero-avatar-wrap">
                <div className="hero-avatar-ring" />
                <img src={GradPic} alt="Michael Ryan Arreglo" className="hero-avatar" />
              </div>
              <div className="hero-info">
                <p className="hero-name">Michael Ryan Arreglo</p>
                <p className="hero-role">Computer Engineer</p>
                <p className="hero-subrole">IEEE Published Researcher</p>
              </div>
            </div>
            <p className="hero-card-copy">
              Full-stack builder for production-ready apps, AI-assisted features, and IoT systems.
            </p>
            <div className="hero-status hero-status-live">
              <span className="status-dot" />
              <span>Available for remote work &middot; GMT+8</span>
            </div>
            <div className="hero-proof">
              {credibilityItems.map(item => (
                <div key={item} className="hero-proof-item">
                  <span className="hero-proof-dot" />
                  <span className="hero-proof-text">{item}</span>
                </div>
              ))}
            </div>
            <p className="hero-card-note">
              Best suited for teams that need one developer who can build across frontend, backend, and connected-device workflows.
            </p>
            <div className="hero-card-metrics">
              <div className="hero-card-metric">
                <span className="hero-card-metric-num">5+</span>
                <span className="hero-card-metric-lbl">Production Builds Delivered</span>
              </div>
              <div className="hero-card-metric-divider" />
              <div className="hero-card-metric">
                <span className="hero-card-metric-num">1K+</span>
                <span className="hero-card-metric-lbl">Users Reached Through Live Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
