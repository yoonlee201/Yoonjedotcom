import { useState } from 'react'

const research = [
  {
    title: 'Graduate Research Assistant – Data Analyst',
    venue: 'Virginia Tech · AI in CS Education',
    year: 'Aug 2025 – Present',
    description: 'Analyzed student quiz performance and LLM usage patterns across 367 students using Python/pandas.',
    bullets: [
      'Analyzed the relationship between student quiz performance and LLM usage patterns using Python and pandas to consolidate 7 Canvas quiz CSV exports into unified per-student tables.',
      'Implemented consent-aware ID mapping with deduplication and inner-join merging, generating exclusion reports for unmatched and non-consented records.',
      'Cleaned and standardized raw exports using regex-based column renaming and schema normalization to produce reproducible, analysis-ready datasets.',
      'Produced descriptive statistics and visualizations in matplotlib/seaborn to summarize LLM usage, verification methods, and prompt distributions across quiz verticals.',
      'Conducted statistical analysis (ANOVA) to identify correlations between student scores and LLM usage frequency, informing educational research on AI tool effectiveness.',
    ],
  },
  {
    title: 'Graduate Research Assistant – DBWorkout',
    venue: 'Virginia Tech',
    year: 'Aug 2025 – Present',
    description: 'Built Flask API endpoints and integrated OpenAI API to generate LLM-powered database tasks and schemas for instructor workflows.',
    bullets: [
      'Tested course API endpoints in Postman for student/professor roles, validating authentication and authorization workflows.',
      'Developed Flask API endpoints to generate and persist LLM-produced tasks and database schemas for instructor workflows.',
      'Integrated the OpenAI API with structured outputs and JSON schema validation for consistent, machine-readable responses.',
      'Refined prompt engineering strategies to improve the accuracy, specificity, and instructional relevance of generated outputs.',
      'Designed responsive UI components for task and schema creation, streamlining the content generation workflow.',
    ],
  },
  {
    title: 'Graduate Research Assistant – Classroom Evaluation',
    venue: 'Virginia Tech',
    year: 'Aug 2025 – Present',
    description: 'Built React dashboards with Recharts to visualize real-time engagement metrics from gaze/posture detection models.',
    bullets: [
      'Conducted 10+ literature reviews over 6 weeks to research evaluation metrics and analysis methodologies for classroom engagement assessment.',
      'Built interactive React dashboards using Recharts to visualize engagement metrics, including time-series plots of average student engagement over class sessions.',
      'Implemented stacked histograms with color-coded visualization of gaze and posture detection patterns, enabling interpretable analysis of student engagement trends.',
    ],
  },
]

const publications = [
  {
    authors: 'Jixiang Fan, Jiacheng Zhao, Sunggyeol Oh, Michael Bolmer Jr, Yoonje Lee, Nick Flammer, Yuhao Chen, and D. Scott McCrickard.',
    title: 'Structuring Collaborative Reflection: Integrating Diary Study and Focus Group Discussion.',
    venue: 'CSCW Companion \'25: Companion Publication of the 2025 Conference on Computer-Supported Cooperative Work and Social Computing',
    year: 'October 2025',
    doi: 'https://doi.org/10.1145/3715070.3749233',
  },
]

export default function Research() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  const toggle = (i: number) => {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div>
      <h2 className="text-xs tracking-widest uppercase text-muted mb-6">Research</h2>
      <div className="flex flex-col gap-6 mb-10">
        {research.map((r, i) => (
          <div key={i} className="border-l-2 border-border pl-5">
            <button onClick={() => toggle(i)} className="w-full text-left">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-primary font-medium text-lg">{r.title}</h3>
                <span className="text-muted text-sm">{r.year}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted text-xs tracking-widest uppercase">{r.venue}</p>
                <span className="text-muted text-xs ml-4 transition-transform duration-200" style={{ display: 'inline-block', transform: expanded.has(i) ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
              </div>
            </button>
            <p className="text-secondary text-sm mt-2 leading-relaxed">{r.description}</p>
            {expanded.has(i) && (
              <ul className="flex flex-col gap-1 mt-3">
                {r.bullets.map((b, j) => (
                  <li key={j} className="text-secondary text-sm flex gap-2">
                    <span className="text-border mt-1 shrink-0">·</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-xs tracking-widest uppercase text-muted mb-6">Publications</h2>
      <div className="flex flex-col gap-4">
        {publications.map((p, i) => (
          <div key={i} className="border-l-2 border-border pl-5">
            <p className="text-secondary text-sm leading-relaxed mb-1">
              <span className="text-muted">{p.authors}</span>{' '}
              <span className="text-primary font-medium">"{p.title}"</span>{' '}
              <span className="text-secondary italic">{p.venue}</span>, {p.year}.
            </p>
            <a href={p.doi} target="_blank" rel="noreferrer" className="text-xs text-muted hover:text-primary transition-colors tracking-wide">
              {p.doi} →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
