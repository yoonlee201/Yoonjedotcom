const education = [
  {
    school: 'Virginia Polytechnic Institute and State University',
    location: 'Blacksburg, VA',
    degree: 'Master of Computer Science and Applications',
    period: 'Aug 2025 – May 2026',
    notes: 'GPA: 4.00',
  },
  {
    school: 'Virginia Polytechnic Institute and State University',
    location: 'Blacksburg, VA',
    degree: 'Bachelor of Computer Science & HCI Minor',
    period: 'Aug 2022 – May 2025',
    notes: 'GPA: 3.91 · Phi Kappa Phi · Phi Beta Kappa · President\'s List · Dean\'s List',
  },
  {
    school: 'George Mason University',
    location: 'Vienna, VA',
    degree: 'Bachelor of Computer Science',
    period: '– May 2022',
    notes: 'GPA: 3.97',
  },
]

export default function Education() {
  return (
    <div>
      <h2 className="text-xs tracking-widest uppercase text-muted mb-6">Education</h2>
      <div className="flex flex-col gap-6">
        {education.map((e, i) => (
          <div key={i} className="border-l-2 border-border pl-5">
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-primary font-medium text-lg">{e.school}</h3>
              <span className="text-muted text-sm">{e.period}</span>
            </div>
            <p className="text-muted text-xs tracking-widest uppercase mb-1">{e.location}</p>
            <p className="text-secondary text-sm mb-1">{e.degree}</p>
            <p className="text-muted text-sm">{e.notes}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
