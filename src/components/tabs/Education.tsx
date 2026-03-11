import { education } from '../../constants/education'

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
