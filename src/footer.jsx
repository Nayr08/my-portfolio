import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner site-shell">
        <div className="footer-main">
          <div className="footer-logo">MRA<span>.</span></div>
          <p className="footer-copy">&copy; 2026 Michael Ryan Arreglo &middot; Full-Stack Developer &middot; Philippines</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Nayr08" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ryan-arreglo" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:arreglo44@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
