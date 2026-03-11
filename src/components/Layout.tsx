import { useState, useRef } from 'react'
import Sidebar from './Sidebar'
import About from './tabs/About'
import Education from './tabs/Education'
import Experience from './tabs/Experience'
import Projects from './tabs/Projects'
import Research from './tabs/Research'
import Contacts from './tabs/Contacts'
import profileFront from '../assets/YoonjeProfile.JPG' // update path as needed
// import profileBack from './assets/profile.jpg' // or remove if you just want a text back

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
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const rafRef = useRef<number>(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => setTilt({ x: dy * -3, y: dx * 3 }))
  }

  const handleMouseLeave = () => {
    setHovering(false)
    cancelAnimationFrame(rafRef.current)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6">
      <div
        ref={cardRef}
        className="card-3d relative w-full max-w-6xl"
        style={{
          transform: `perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovering ? 1.005 : 1})`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
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
            <div key={activeTab} className="tab-fade">
              {tabComponents[activeTab]}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}