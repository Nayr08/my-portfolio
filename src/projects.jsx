import './projects.css'
import logoEdutag from './assets/pnsalogo-f.png'
import logoSouthstyleSuki from './assets/SouthStyleSUKI-logo.png'
import logoAiOrganizer from './assets/aiorganizer-logo.png'
import logoHikeMuna from './assets/hikemuna-logo.png'
import logoSuperales from './assets/superales_logo.png'
import logoUncleBelly from './assets/UncleBelly.png'

const projects = [
  {
    name: 'SouthStyle Suki Point System',
    category: 'Loyalty & Order Tracking Platform',
    year: '2026',
    outcome: 'Deployed client system',
    desc: 'Built and deployed a customer loyalty system for SouthStyle using Next.js, React, TypeScript, Tailwind CSS, Supabase, and PostgreSQL. The platform supports customer login, admin and staff dashboards, QR/RFID account lookup, point earning and redemption, coupons, tier progress, transaction history, and order tracking backed by Playwright E2E tests.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Playwright'],
    logo: logoSouthstyleSuki,
    bg: 'bg1',
    link: 'https://github.com/Nayr08/SouthStyle-PointSystem',
  },
  {
    name: 'AI Organizer Web App',
    category: 'AI Productivity Tool',
    year: '2026',
    outcome: 'Natural-language task parsing',
    desc: 'Developed an AI schedule organizer that converts English, Tagalog, and Bisaya schedule input into structured tasks with dates, time ranges, categories, priorities, recurrence, and fallback parsing. The app uses Next.js, React, TypeScript, Prisma, PostgreSQL, OpenAI, Google GenAI/Gemini, and Zod validation.',
    tags: ['Next.js', 'Prisma', 'OpenAI', 'Gemini'],
    logo: logoAiOrganizer,
    bg: 'bg5',
    link: 'https://github.com/Nayr08/AIOrganizer',
  },
  {
    name: 'HikeMuna Hiking Platform',
    category: 'Marketplace & Social App',
    year: '2026',
    outcome: 'Booking and organizer workflows',
    desc: 'Built a hiking marketplace and social app with Next.js, React, TypeScript, Supabase Auth and Database, Tailwind CSS, and MapLibre GL. The platform includes hike discovery, booking requests, organizer publishing, user profiles, Google auth, post creation, image compression, Cloudinary uploads, and map views.',
    tags: ['Next.js', 'Supabase', 'MapLibre', 'Cloudinary'],
    logo: logoHikeMuna,
    bg: 'bg3',
    link: 'https://github.com/Nayr08/HikeMuna',
  },
  {
    name: 'EduTag System',
    category: 'Web Platform',
    year: '2024',
    outcome: 'Deployed for 1,000+ users',
    desc: 'Built to streamline school operations for a growing academic community, EduTag replaced fragmented manual processes with a live education management platform. I developed the core database structure, authentication flow, and REST API from scratch, creating a system that supports 1,000+ active users with clearer records, faster access, and more reliable day-to-day administration.',
    tags: ['Node.js', 'Supabase', 'API Architecture'],
    logo: logoEdutag,
    bg: 'bg1',
    link: 'https://pnsa-pcds.web.app',
  },
  {
    name: 'UB Enterprises Management System',
    category: 'Enterprise Platform',
    year: '2025',
    outcome: 'Centralized operations across branches',
    desc: 'Built a responsive enterprise resource management platform for multi-branch operations, featuring role-based dashboards, real-time inventory tracking, production workflows, approval systems, audit trails, and reporting tools. The system helps centralize orders, branch monitoring, and financial visibility in one interface.',
    tags: ['React', 'Vite', 'Recharts', 'Chart.js', 'XLSX'],
    logo: logoUncleBelly,
    bg: 'bg2',
  },
  {
    name: 'Superales Surplus',
    category: 'Retail Operations Platform',
    year: '2025',
    outcome: 'Real-time stock visibility',
    desc: 'Created for a surplus retail business that needed tighter control over stock and sales, Superales Surplus centralizes inventory, reporting, and store activity in one platform. I built a real-time inventory and sales workflow that improves stock visibility and reduces manual tracking.',
    tags: ['React', 'Node.js', 'Real-Time Inventory'],
    logo: logoSuperales,
    bg: 'bg4',
    link: 'https://superales-surplus.vercel.app',
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
                {p.logo ? (
                  <img src={p.logo} alt={p.name} className="proj-logo" />
                ) : (
                  <div className="proj-initials" aria-hidden="true">{p.initials}</div>
                )}
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
