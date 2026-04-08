import { useState } from 'react'
import { projects } from '../../constants/project'

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
    <>
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
                <div className="flex items-center gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="px-3 py-1 rounded-full border border-border text-muted text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="px-3 py-1 rounded-full border border-border text-muted text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
                    >
                      Demo
                    </a>
                  )}
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
    </>
  )
}
