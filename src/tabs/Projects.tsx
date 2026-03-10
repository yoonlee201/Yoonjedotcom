import { useState } from 'react'

const projects = [
  {
    name: 'Lotto App',
    period: 'Aug 2025 – Present',
    description: 'Full-stack lottery app with AI-powered number suggestions across web and mobile.',
    stack: ['React Native', 'Flask', 'SQLite', 'OpenAI API'],
    bullets: [
      'Built a full-stack lottery app with a Flask backend (REST APIs) and SQLite database for managing lottery history.',
      'Developed a cross-platform React Native frontend integrating with backend APIs for real-time number generation and history tracking.',
      'Integrated the OpenAI API to deliver personalized number suggestions and probability insights, enhancing the app beyond basic randomization.',
    ],
    link: '#',
  },
  {
    name: 'Diary Quest',
    period: 'Jan 2025 – Present',
    description: 'Web platform for structured student reflection with AI-driven theme extraction and collaborative learning workflows.',
    stack: ['React', 'AI'],
    bullets: [
      'Designed and advanced a web-based platform enabling students to document experiences and engage in structured reflection.',
      'Integrated analytics dashboards and visualizations (word clouds, thematic maps, collages) to support deeper insights.',
      'Implemented AI-driven theme extraction and group formation, supporting a four-phase Jigsaw learning workflow for collaborative reflection.',
    ],
    link: '#',
  },
  {
    name: 'RewardBot',
    period: 'Dec 2024',
    description: 'Gamified student reward system built with the MERN stack with Canvas API integration and a Chrome extension.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Canvas API'],
    bullets: [
      'Built a gamified student reward system using the MERN stack, increasing assignment completion rates.',
      'Integrated Canvas API to dynamically retrieve and visualize student assignment data for real-time progress tracking.',
      'Designed a REST API backend using the MERN stack enhancing data retrieval speed and frontend responsiveness.',
      'Developed a Chrome extension with React and Node.js to display real-time assignment deadlines.',
    ],
    link: '#',
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  const toggle = (i: number) => {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div>
      <h2 className="text-xs tracking-widest uppercase text-muted mb-6">Projects</h2>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((p, i) => (
          <div key={i} className="rounded-2xl border border-border/40 bg-surface p-5 hover:border-border transition-colors">
            <button onClick={() => toggle(i)} className="w-full text-left">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-primary font-medium text-lg">{p.name}</h3>
                  <p className="text-muted text-xs mt-0.5">{p.period}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={p.link}
                    onClick={e => e.stopPropagation()}
                    className="text-muted text-xs tracking-widest uppercase hover:text-primary transition-colors"
                  >
                    View →
                  </a>
                  <span className="text-muted text-xs transition-transform duration-200" style={{ display: 'inline-block', transform: expanded.has(i) ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
                </div>
              </div>
            </button>
            <p className="text-secondary text-sm mb-3 leading-relaxed">{p.description}</p>
            {expanded.has(i) && (
              <ul className="flex flex-col gap-1 mb-3">
                {p.bullets.map((b, j) => (
                  <li key={j} className="text-secondary text-sm flex gap-2">
                    <span className="text-border mt-1 shrink-0">·</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2">
              {p.stack.map(s => (
                <span key={s} className="px-2 py-0.5 rounded-full bg-tag text-primary text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
