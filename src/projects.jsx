import './projects.css'
import logoEdutag from './assets/pnsalogo-f.png'
import logoSummitph from './assets/summitlogo-f.png'
import logoLiveselling from './assets/liveselling.png'
import logoSouthstyle from './assets/southstylelogo-f.png'
import logoSuperales from './assets/superales_logo.png'
import logoUncleBelly from './assets/UncleBelly.png'

const projects = [
  {
    name: 'EduTag System',
    category: 'Web Platform',
    year: '2024',
    outcome: '1,000+ active users',
    desc: 'Built to streamline school operations for a growing academic community, EduTag replaced fragmented manual processes with a live education management platform. I developed the core database structure, authentication flow, and REST API from scratch, creating a system that supports 1,000+ active users with clearer records, faster access, and more reliable day-to-day administration.',
    tags: ['Node.js', 'Supabase', 'API Architecture'],
    logo: logoEdutag,
    bg: 'bg1',
    link: 'https://pnsa-pcds.web.app',
  },
  {
    name: 'Superales Surplus',
    category: 'Retail Operations Platform',
    year: '2025',
    outcome: 'Real-time stock visibility',
    desc: 'Created for a surplus retail business that needed tighter control over stock and sales, Superales Surplus centralizes inventory, reporting, and store activity in one platform. I built a real-time inventory and sales workflow that improves stock visibility, reduces manual tracking, and gives the business a more reliable operational view.',
    tags: ['React', 'Node.js', 'Real-Time Inventory'],
    logo: logoSuperales,
    bg: 'bg2',
    link: 'https://superales-surplus.vercel.app',
  },
  {
    name: 'Southstyle',
    category: 'E-Commerce Platform',
    year: '2025',
    outcome: 'Stronger digital sales experience',
    desc: 'Designed to give a fashion brand a cleaner online buying experience, Southstyle turns product discovery, cart management, and checkout into a responsive end-to-end storefront. The platform improves product presentation, simplifies purchasing, and gives the business a stronger digital sales channel.',
    tags: ['Flutter', 'Firebase', 'Responsive Commerce'],
    logo: logoSouthstyle,
    bg: 'bg1',
    link: 'https://southstyle.vercel.app',
  },
  {
    name: 'Uncle Belly',
    category: 'ENTERPRISE PLATFORM',
    year: '2026',
    outcome: 'Centralized operations across branches',
    desc: 'Built a responsive enterprise resource management platform for multi-branch operations, featuring role-based dashboards, real-time inventory tracking, production workflows, audit trails, and reporting tools. The system helps centralize approvals, orders, branch monitoring, and financial visibility in one interface.',
    tags: ['React', 'Vite', 'Recharts', 'Chart.js', 'XLSX'],
    logo: logoUncleBelly,
    bg: 'bg2',
  },
  {
    name: 'SummitPH Booking Platform',
    category: 'Booking Platform',
    year: '2024',
    outcome: 'Better booking flow clarity',
    desc: 'Built to simplify travel and booking workflows, SummitPH combines a responsive booking experience with interactive map-based exploration through MapLibre. The result is a more intuitive user journey, helping users understand locations faster and complete booking steps with less friction.',
    tags: ['Vue.js', 'MapLibre', 'UX Flows'],
    logo: logoSummitph,
    bg: 'bg2',
  },
  {
    name: 'Live Selling POS System',
    category: 'Desktop POS System',
    year: '2023',
    outcome: '85% fewer manual tracking errors',
    desc: 'Developed for retail operations that relied heavily on manual monitoring, this desktop POS system automated receipt generation, sales handling, and inventory reporting in one workflow. The system improved day-to-day efficiency, strengthened reporting accuracy, and reduced manual tracking errors by 85 percent.',
    tags: ['JavaFX', 'MySQL', 'Desktop Workflow'],
    logo: logoLiveselling,
    bg: 'bg3',
  },
]

export default function Projects() {
  const handleProjectClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noreferrer')
    }
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-inner site-shell">
        <div className="projects-header reveal">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Selected Projects</h2>
            <p className="projects-intro">
              A focused set of systems built to solve operational problems, improve workflows,
              and deliver practical value across web, desktop, and business environments.
            </p>
          </div>
          <a href="https://github.com/Nayr08" target="_blank" rel="noreferrer" className="btn-outline">
            View GitHub &rarr;
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`proj-card ${p.link ? 'proj-card--clickable' : ''} reveal reveal-delay-${(i % 3) + 1}`}
              onClick={() => handleProjectClick(p.link)}
            >
              <div className={`proj-visual ${p.bg}`}>
                <img src={p.logo} alt={p.name} className="proj-logo" />
              </div>
              <div className="proj-body">
                <div className="proj-meta-top">
                  <div className="proj-meta-group">
                    <p className="proj-cat">{p.category}</p>
                    <p className="proj-year">{p.year}</p>
                  </div>
                  {p.outcome && <p className="proj-outcome">{p.outcome}</p>}
                </div>
                <p className="proj-name">{p.name}</p>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-footer">
                  <div className="proj-tags">
                    {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                  <span className="proj-arrow">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
