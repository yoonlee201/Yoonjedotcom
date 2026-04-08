import { links } from '../../constants/contacts'

export default function Contacts() {
  return (
    <div>
      <h2 className="text-xs tracking-widest uppercase text-muted mb-6">Contacts</h2>
      <div className="flex flex-col gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-2xl border border-border bg-surface px-5 py-4 hover:border-border hover:bg-hover transition-all group"
          >
            <span className="text-xs tracking-widest uppercase text-muted group-hover:text-primary transition-colors">
              {l.label}
            </span>
            <span className="text-secondary text-sm group-hover:text-primary transition-colors">
              {l.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
