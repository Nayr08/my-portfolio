import { useState } from 'react'
import './skills.css'

const skillsData = {
  'Frontend': [
    { name: 'React 18/19', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
    { name: 'JavaScript ES6+', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'MapLibre GL', badge: 'ML', tone: 'teal' },
  ],
  'Backend': [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Prisma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
    { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    { name: 'Zod', badge: 'Z', tone: 'blue' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  ],
  'Databases': [
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  ],
  'AI & ML': [
    { name: 'OpenAI API', logo: 'https://cdn.simpleicons.org/openai/ffffff' },
    { name: 'Codex', badge: 'CX', tone: 'green' },
    { name: 'Claude Code', logo: 'https://cdn.simpleicons.org/anthropic/ffffff' },
    { name: 'Gemini', logo: 'https://cdn.simpleicons.org/googlegemini/8e75b2' },
    { name: 'Google GenAI', logo: 'https://cdn.simpleicons.org/google/4285f4' },
    { name: 'AI Task Parsing', badge: 'AI', tone: 'violet' },
    { name: 'YOLOv8', badge: 'Y8', tone: 'amber' },
    { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
    { name: 'Computer Vision', badge: 'CV', tone: 'cyan' },
  ],
  'Tools & Testing': [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
    { name: 'Playwright', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg' },
    { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' },
    { name: 'Vitest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  ],
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All')

  const getFilteredSkills = () => {
    if (activeFilter === 'All') {
      return Object.values(skillsData).flat()
    }
    return skillsData[activeFilter] || []
  }

  const filteredSkills = getFilteredSkills()
  return (
    <section className="skills" id="skills">
      <div className="skills-inner site-shell">
        <div className="skills-header">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">Technical Expertise</h2>
        </div>

        <div className="skills-filters">
          {['All', 'Frontend', 'Backend', 'Databases', 'AI & ML', 'Tools & Testing'].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="skills-logos">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-logo-card">
              <span className="skill-card-sheen" />
              {skill.logo ? (
                <img src={skill.logo} alt={skill.name} className="skill-logo-img" />
              ) : (
                <span className={`skill-logo-badge ${skill.tone ? `skill-logo-badge--${skill.tone}` : ''}`}>
                  {skill.badge}
                </span>
              )}
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
