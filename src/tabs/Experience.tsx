const experience = [
  {
    company: 'Company Name',
    role: 'Software Engineer Intern',
    period: 'Summer 2023',
    bullets: [
      'Built and shipped X feature used by Y users.',
      'Improved performance of Z by 30% through optimization.',
      'Collaborated with cross-functional teams to deliver on tight deadlines.',
    ],
  },
]

export default function Experience() {
  return (
    <div>
      <h2 className="text-xs tracking-widest uppercase text-muted mb-6">Experience</h2>
      <div className="flex flex-col gap-8">
        {experience.map((e, i) => (
          <div key={i} className="border-l-2 border-border pl-5">
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-primary font-medium text-lg">{e.company}</h3>
              <span className="text-muted text-sm">{e.period}</span>
            </div>
            <p className="text-secondary text-sm mb-3">{e.role}</p>
            <ul className="flex flex-col gap-1">
              {e.bullets.map((b, j) => (
                <li key={j} className="text-secondary text-sm flex gap-2">
                  <span className="text-border mt-1">·</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
