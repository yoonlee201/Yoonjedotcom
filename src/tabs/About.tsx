export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-light tracking-wide text-primary mb-1">Yoonje Lee</h1>
      <p className="text-muted text-sm tracking-widest uppercase mb-8">Software Engineer</p>

      <section className="mb-8">
        <h2 className="text-xs tracking-widest uppercase text-muted mb-3">About</h2>
        <p className="text-secondary leading-relaxed text-[15px]">
          A short bio about yourself goes here. Describe your interests, background, and what drives you.
        </p>
      </section>

      <section>
        <h2 className="text-xs tracking-widest uppercase text-muted mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['React', 'TypeScript', 'Python', 'Node.js', 'Tailwind CSS', 'SQL'].map(skill => (
            <span key={skill} className="px-3 py-1 rounded-full bg-[#e8dfd0] text-secondary text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
