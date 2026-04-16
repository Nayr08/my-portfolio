import './contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-glow" />
      <div className="contact-inner site-shell">
        <div className="reveal">
          <p className="section-label">Get In Touch</p>
          <h2 className="contact-headline">
            Let's Build Something<br />
            <span>Great Together</span>
          </h2>
          <p className="contact-sub">
            Available for remote work &middot; Full-time &middot; 40 hrs/week &middot; Immediate start
          </p>
          <a href="mailto:arreglo44@gmail.com" className="contact-email">
            arreglo44@gmail.com
          </a>
          <div className="contact-links">
            <a href="https://linkedin.com/in/ryan-arreglo" target="_blank" rel="noreferrer" className="contact-link">
              <span>LinkedIn</span> &rarr;
            </a>
            <a href="https://github.com/Nayr08" target="_blank" rel="noreferrer" className="contact-link">
              <span>GitHub</span> &rarr;
            </a>
            <a href="tel:+639628035151" className="contact-link">
              <span>0962-803-5151</span> &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
