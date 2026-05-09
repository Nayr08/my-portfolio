import './certificates.css'
import certificateOne from './assets/certificate1.jpg'
import certificateTwo from './assets/certificate2.png'

const certificates = [
  {
    title: 'On-the-Job Training Completion',
    issuer: 'Jairosoft Inc.',
    image: certificateOne,
    orientation: 'portrait',
  },
  {
    title: 'Research Thesis and AI Applications',
    issuer: 'CCJEIS College',
    image: certificateTwo,
    orientation: 'landscape',
  },
]

export default function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="certificates-inner site-shell">
        <div className="certificates-header reveal">
          <div>
            <p className="section-label">Credentials</p>
            <h2 className="section-title">Certifications</h2>
          </div>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <a
              key={certificate.issuer}
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              className={`certificate-card certificate-card--${certificate.orientation} reveal reveal-delay-${index + 1}`}
            >
              <div className="certificate-preview">
                <img src={certificate.image} alt={`${certificate.title} ${certificate.issuer}`} />
              </div>
              <div className="certificate-info">
                <p>{certificate.issuer}</p>
                <h3>{certificate.title}</h3>
                <span>View credential &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
