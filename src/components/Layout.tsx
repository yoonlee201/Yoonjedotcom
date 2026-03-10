import { useState } from 'react'
import Sidebar from './Sidebar'
import About from '../tabs/About'
import Education from '../tabs/Education'
import Experience from '../tabs/Experience'
import Projects from '../tabs/Projects'
import Research from '../tabs/Research'
import Contacts from '../tabs/Contacts'


export type Tab = 'about' | 'education' | 'experience' | 'projects' | 'research' | 'contacts'

const tabComponents: Record<Tab, React.ReactNode> = {
  about: <About />,
  education: <Education />,
  experience: <Experience />,
  projects: <Projects />,
  research: <Research />,
  contacts: <Contacts />,
}

export default function Layout() {
  const [activeTab, setActiveTab] = useState<Tab>('about')

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6">
      <div className="w-full max-w-6xl h-[85vh] flex rounded-3xl overflow-hidden shadow-2xl border border-border/40 bg-surface">

        {/* Sidebar */}
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Divider */}
        <div className="w-px bg-border/50 shrink-0" />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-10 bg-surface">
          <div
            key={activeTab}
            className="animate-[fadeIn_0.3s_ease]"
          >
            {tabComponents[activeTab]}
          </div>
        </main>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
