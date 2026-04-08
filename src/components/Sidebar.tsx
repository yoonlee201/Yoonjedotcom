import type { Tab } from './Layout'
import profilePhoto from '../assets/YoonjeProfile.JPG'
import logo from '../assets/YoonjeLogo.svg'

const tabs: { id: Tab; label: string }[] = [
  { id: 'about', label: 'About & Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contacts', label: 'Contacts' },
  { id: 'resume', label: 'Resume' },
]

interface SidebarProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="w-64 shrink-0 flex flex-col p-6 gap-6 bg-surface">

      {/* Logo + Photo */}
      <div className="flex flex-col items-center gap-3">
        <img src={logo} alt="Yoonje Lee logo" className="h-8 w-auto opacity-70" />
        <div className="rounded-2xl overflow-hidden border border-border/50 w-full">
          <img src={profilePhoto} alt="Yoonje Lee" className="w-full object-cover" />
        </div>
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
              ? 'bg-tag text-primary font-semibold'
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
