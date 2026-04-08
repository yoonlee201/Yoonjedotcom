import { useState } from 'react'
import { experience } from '../../constants/experience'


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
                <div className="flex items-center gap-3 ml-4">
                  {e.link && (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={ev => ev.stopPropagation()}
                      className="px-3 py-1 rounded-full border border-border text-muted text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
                    >
                      Website
                    </a>
                  )}
                  <span className="text-muted text-xs transition-transform duration-200" style={{ display: 'inline-block', transform: expanded.has(i) ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
                </div>
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
