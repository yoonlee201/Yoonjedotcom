export default function Resume() {
  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xs tracking-widest uppercase text-muted">Resume</h2>
        <a
          href="/yoonje_lee.pdf"
          download="yoonje_lee.pdf"
          className="px-3 py-1 rounded-full border border-border text-muted text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
        >
          Download
        </a>
      </div>
      <iframe
        src="/yoonje_lee.pdf"
        title="Yoonje Lee Resume"
        className="flex-1 w-full rounded-xl border border-border/40 min-h-0"
        style={{ height: 'calc(85vh)' }}
      />
    </div>
  )
}
