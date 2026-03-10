import type { Tab } from './Layout'

const tabs: { id: Tab; label: string }[] = [
  { id: 'about', label: 'About & Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contacts', label: 'Contacts' },
]

interface SidebarProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="w-64 shrink-0 flex flex-col p-6 gap-6 bg-surface">

      {/* Photo */}
      <div className="rounded-2xl overflow-hidden border border-border/50 bg-tag aspect-square w-full flex items-center justify-center text-muted text-sm tracking-widest uppercase">
        {/* Replace with <img src="..." className="w-full h-full object-cover" /> */}
        Photo
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
          text-left px-3 py-2 rounded-xl text-[15px] tracking-wide transition-all duration-200
          ${activeTab === tab.id
                ? 'bg-active text-primary font-semibold'
                : 'text-muted hover:bg-hover hover:text-primary'
              }
        `}
          >
            {tab.label}
          </button>
        ))}
      </nav>

    </aside>
  )
}
