import { useState } from 'react'
import Sidebar from './Sidebar'
import About from './tabs/About'
import Education from './tabs/Education'
import Experience from './tabs/Experience'
import Projects from './tabs/Projects'
import Research from './tabs/Research'
import Contacts from './tabs/Contacts'
import Resume from './tabs/Resume'
import profileFront from '../assets/YoonjeProfile.JPG' 

export type Tab = 'about' | 'education' | 'experience' | 'projects' | 'research' | 'contacts' | 'resume'

const tabComponents: Record<Tab, React.ReactNode> = {
  about: <About />,
  education: <Education />,
  experience: <Experience />,
  projects: <Projects />,
  research: <Research />,
  contacts: <Contacts />,
  resume: <Resume />,
}

export default function Layout() {
  const [activeTab, setActiveTab] = useState<Tab>('about')

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6">
      <div className="relative w-full max-w-6xl">
        {/* depth shadow layer */}
        <div className="card-depth rounded-3xl" />

        {/* flip card — anchored to top-right corner of the card */}
        <div className="flip-card absolute -top-10 -right-10 w-20 h-20 rounded-full z-20 ring-2 ring-border shadow-lg">
          <div className="flip-card-inner rounded-full">
            <div className="flip-card-front rounded-full">
              <img
                src={profileFront}
                alt="Yoonje Lee"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flip-card-back rounded-full text-xs font-medium text-secondary bg-tag">
              Yoonje<br />Lee
            </div>
          </div>
        </div>

        {/* main card */}
        <div className="relative h-[85vh] flex rounded-3xl overflow-hidden shadow-2xl border border-border/40 bg-surface">
          <div className="card-shine" />

          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="w-px bg-border/50 shrink-0" />

          <main className="flex-1 overflow-y-auto p-10 bg-surface">
            <div key={activeTab} className="tab-fade h-full">
              {tabComponents[activeTab]}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}