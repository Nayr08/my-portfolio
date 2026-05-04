import './about.css'
import GradPic from './assets/GradPic.png'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner site-shell">
        <div className="about-media reveal">
          <div className="about-img">
            <div className="about-img-inner">
              <img src={GradPic} alt="Michael Ryan Arreglo" className="about-img-pic" />
              <div className="about-deco-line" />
            </div>
            <div className="about-exp-badge">
              <span className="about-exp-num">2+</span>
              <span className="about-exp-lbl">Years Building</span>
            </div>
          </div>
          <div className="about-details about-details-left">
            <div className="about-detail-item">
              <span>Digos City, Philippines (GMT+8)</span>
            </div>
            <div className="about-detail-item">
              <a href="mailto:arreglo44@gmail.com">arreglo44@gmail.com</a>
            </div>
            <div className="about-detail-item">
              <a href="https://linkedin.com/in/ryan-arreglo" target="_blank" rel="noreferrer">linkedin.com/in/ryan-arreglo</a>
            </div>
            <div className="about-detail-item">
              <a href="https://github.com/Nayr08" target="_blank" rel="noreferrer">github.com/Nayr08</a>
            </div>
          </div>
        </div>

        <div className="about-content reveal reveal-delay-1">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Engineer for<br />Real-World Digital Systems</h2>
          <p className="about-text">
            I build production-ready systems for practical business workflows. My work spans full-stack web development, database-backed platforms, admin dashboards, customer portals, and AI-assisted features designed to solve real operational problems.
          </p>
          <p className="about-text">
            Beyond portfolio demos, I've delivered systems intended for actual use, from frontend interfaces and backend services to deployed client tools. I bring a grounded engineering approach: clear architecture, reliable execution, and a focus on outcomes teams can measure.
          </p>

          <div className="about-research-badge">
            <span className="about-research-label">IEEE Published Research</span>
            <p className="about-research-copy">
              Recognized through IICAIET 2025 publication for applied research in intelligent systems and engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
