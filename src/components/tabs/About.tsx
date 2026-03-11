import { skillGroups } from '../../constants/about'

export default function About() {
  return (
    <>
      <h1 className="text-3xl font-light tracking-wide text-primary mb-1">Yoonje Lee</h1>
      <p className="text-muted text-sm tracking-widest uppercase mb-8">Software Engineer</p>

      <section className="mb-8">
        <h2 className="text-xs tracking-widest uppercase text-muted mb-3">About</h2>
        <p className="text-primary leading-relaxed text-[15px]">
          CS grad student at Virginia Tech (M.Eng. 2026) with a background in full-stack web development, LLM integration, and data analysis. I enjoy building clean, performant interfaces and end-to-end systems — from React frontends to Flask backends to cloud deployments.
        </p>
      </section>

      <section>
        <h2 className="text-xs tracking-widest uppercase text-muted mb-3">Skills</h2>
        <div className="flex flex-col gap-4">
          {skillGroups.map(group => (
            <div key={group.label}>
              <p className="text-xs tracking-widest uppercase text-muted mb-2">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-tag text-primary text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
