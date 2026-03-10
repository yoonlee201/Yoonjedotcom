const research = [
  {
    title: 'Research Paper or Project Title',
    venue: 'Conference / Lab / Publication',
    year: '2024',
    description: 'Brief description of the research topic, your contribution, and any findings or outcomes.',
  },
]

export default function Research() {
  return (
    <div>
      <h2 className="text-xs tracking-widest uppercase text-muted mb-6">Research</h2>
      <div className="flex flex-col gap-6">
        {research.map((r, i) => (
          <div key={i} className="border-l-2 border-border pl-5">
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-primary font-medium text-lg">{r.title}</h3>
              <span className="text-muted text-sm">{r.year}</span>
            </div>
            <p className="text-muted text-xs tracking-widest uppercase mb-2">{r.venue}</p>
            <p className="text-secondary text-sm leading-relaxed">{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
