import { useState } from 'react'

const experience = [
  {
    company: 'Alterea, Inc.',
    role: 'Web Development Intern',
    period: 'Sep 2025 – Present',
    description: 'Redesigned dashboard UI and delivered full-stack features using React, TypeScript, and Firebase.',
    bullets: [
      'Redesigned dashboard UI and multiple page layouts using React, TypeScript, and Tailwind CSS to match Figma specs, improving visual consistency across the application.',
      'Developed typed frontend user-role model in TypeScript with centralized role constants, replacing string-based checks to improve code maintainability and authorization logic.',
      'Built reusable role-access hook in React to streamline permission checks across components and eliminate code duplication.',
      'Delivered end-to-end Teacher Lesson Plan Quiz feature integrating React frontend with Firebase backend, implementing personalization logic to generate customized lesson plans based on quiz responses.',
    ],
  },
  {
    company: 'Versy (Versy Talks)',
    role: 'Software Engineer Intern',
    period: 'May 2024 – Aug 2024',
    description: 'Built real-time notification systems, redesigned blog interface, and implemented authentication flows with Next.js and PostgreSQL.',
    bullets: [
      'Developed real-time notification system using Next.js and PostgreSQL, creating 10+ REST API endpoints.',
      'Redesigned blog interface with Tailwind CSS, implementing responsive patterns and optimizing component architecture.',
      'Architected an automated authentication system with email-based password recovery using Prisma and PostgreSQL.',
      'Implemented responsive design optimizations with Tailwind CSS for improved mobile user engagement.',
      'Built reusable React components and established frontend design patterns to improve codebase maintainability.',
    ],
  },
  {
    company: 'Virginia Tech',
    role: 'Undergraduate Teaching Assistant',
    period: 'Aug 2023 – May 2025',
    description: 'Supported 100+ students per semester in introductory CS courses; promoted to Lead TA.',
    bullets: [
      'Supported Intro to Computer Organization (C) and Data Structures & Algorithms (Java) through coding concepts, assignments, and debugging during office hours and labs.',
      'Supervised 100+ students per semester with coding assignments by holding weekly office hours (9 hours/week).',
      'Proctored exams and ensured adherence to testing procedures and academic integrity policies.',
      'Promoted to Lead TA based on strong performance and initiative.',
    ],
  },
]

export default function Experience() {
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
      <h2 className="text-xs tracking-widest uppercase text-muted mb-6">Experience</h2>
      <div className="flex flex-col gap-6">
        {experience.map((e, i) => (
          <div key={i} className="border-l-2 border-border pl-5">
            <button
              onClick={() => toggle(i)}
              className="w-full text-left group"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-primary font-medium text-lg">{e.company}</h3>
                <span className="text-muted text-sm">{e.period}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-secondary text-sm">{e.role}</p>
                <span className="text-muted text-xs ml-4 transition-transform duration-200" style={{ display: 'inline-block', transform: expanded.has(i) ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
              </div>
            </button>
            <p className="text-secondary text-sm mt-2 leading-relaxed">{e.description}</p>
            {expanded.has(i) && (
              <ul className="flex flex-col gap-1 mt-3">
                {e.bullets.map((b, j) => (
                  <li key={j} className="text-secondary text-sm flex gap-2">
                    <span className="text-border mt-1 shrink-0">·</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
