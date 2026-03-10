const projects = [
  {
    name: 'Project One',
    description: 'A brief description of what this project does and the problem it solves.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    link: '#',
  },
  {
    name: 'Project Two',
    description: 'Another project description. What you built, why, and the impact.',
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <div>
      <h2 className="text-xs tracking-widest uppercase text-muted mb-6">Projects</h2>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((p, i) => (
          <div key={i} className="rounded-2xl border border-border/40 bg-bg p-5 hover:border-border transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-primary font-medium text-lg">{p.name}</h3>
              <a href={p.link} className="text-muted text-xs tracking-widest uppercase hover:text-primary transition-colors">
                View →
              </a>
            </div>
            <p className="text-secondary text-sm mb-3 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map(s => (
                <span key={s} className="px-2 py-0.5 rounded-full bg-[#e8dfd0] text-[#7a6a58] text-xs">
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
