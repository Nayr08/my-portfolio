import './hero.css'
import GradPic from './assets/GradPic.png'

const resumeUrl = '/Michael_Ryan_Arreglo_Resume.html'

export default function Hero() {
  const credibilityItems = [
    'Full-stack developer for deployed web apps',
    'Open to remote work',
    'Strong with AI-assisted product features',
  ]

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-glow" />

      <div className="hero-inner site-shell">
        <div className="hero-left">
          <h1 className="hero-title">
            Full-Stack<br />
            <span className="hero-title-accent">Developer</span> for<br />
            Web Apps &amp; AI Tools
          </h1>

          <p className="hero-sub">
            I build production-ready platforms for real client workflows, from backend
            architecture and database design to polished frontend delivery, admin dashboards,
            customer portals, and AI-assisted automation.
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
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn-outline hero-btn-secondary">
              View Resume
            </a>
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
              Full-stack builder for deployed apps, AI-assisted features, and practical business workflows.
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
              Best suited for teams that need one developer who can build across frontend, backend, databases, and user-facing workflows.
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
