import { useState } from 'react'
import { research, publications } from '../../constants/research'

export default function Research() {
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
      <h2 className="text-xs tracking-widest uppercase text-muted mb-6">Research</h2>
      <div className="flex flex-col gap-6 mb-10">
        {research.map((r, i) => (
          <div key={i} className="border-l-2 border-border pl-5">
            <button onClick={() => toggle(i)} className="w-full text-left">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-primary font-medium text-lg">{r.title}</h3>
                <span className="text-muted text-sm">{r.year}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted text-xs tracking-widest uppercase">{r.venue}</p>
                <span className="text-muted text-xs ml-4 transition-transform duration-200" style={{ display: 'inline-block', transform: expanded.has(i) ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
              </div>
            </button>
            <p className="text-secondary text-sm mt-2 leading-relaxed">{r.description}</p>
            {expanded.has(i) && (
              <ul className="flex flex-col gap-1 mt-3">
                {r.bullets.map((b, j) => (
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

      <h2 className="text-xs tracking-widest uppercase text-muted mb-6">Publications</h2>
      <div className="flex flex-col gap-4">
        {publications.map((p, i) => (
          <div key={i} className="border-l-2 border-border pl-5">
            <p className="text-secondary text-sm leading-relaxed mb-1">
              <span className="text-muted">{p.authors}</span>{' '}
              <span className="text-primary font-medium">"{p.title}"</span>{' '}
              <span className="text-secondary italic">{p.venue}</span>, {p.year}.
            </p>
            <a href={p.doi} target="_blank" rel="noreferrer" className="text-xs text-muted hover:text-primary transition-colors tracking-wide">
              {p.doi}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
