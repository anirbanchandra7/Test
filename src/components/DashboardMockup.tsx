import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Copy,
  Grid,
  Layers,
  ListTodo,
  Monitor,
  PanelLeft,
  Plus,
  RotateCw,
  Share,
  Sparkles,
} from 'lucide-react'
import Logo from './Logo'

const STATS = [
  { label: 'RELEASED', value: '62', sub: 'Posts indexed' },
  { label: 'BREADTH', value: '12', sub: 'Subject groups' },
  { label: 'REMAINING', value: '412', sub: 'Ready to draft' },
  { label: 'MAX REACH', value: '3,156,200', sub: 'Searches a month' },
]

const SUBJECTS = [
  { title: 'Elder Care', count: '5 groups', posts: '24 posts' },
  { title: 'Mobility', count: '4 groups', posts: '19 posts' },
  { title: 'Home Safety', count: '3 groups', posts: '19 posts' },
]

const RECENT = [
  'Choosing a home care provider',
  'Fall prevention checklist',
  'Medication reminders that work',
]

const INBOX = [
  { q: 'How do I choose an in-home caregiver?', vol: '18,400', diff: 'Low', status: 'Drafting' },
  { q: 'What does respite care cost in 2026?', vol: '12,900', diff: 'Medium', status: 'Drafting' },
  { q: 'Best fall-detection devices for seniors', vol: '9,650', diff: 'Low', status: 'Queued' },
  { q: 'Signs a parent needs assisted living', vol: '7,200', diff: 'High', status: 'Queued' },
  { q: 'How to make a bathroom senior-safe', vol: '5,540', diff: 'Low', status: 'Queued' },
]

export default function DashboardMockup() {
  return (
    <div className="rounded-t-2xl overflow-hidden bg-[#1a1a1c] shadow-[0_-20px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10 text-left">
      {/* Title bar */}
      <div className="flex items-center gap-3 bg-[#242427] border-b border-white/5 px-4 py-2.5">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>

        {/* Left icons */}
        <div className="flex items-center gap-2.5 ml-1">
          <PanelLeft className="w-3.5 h-3.5 text-white/40" />
          <ChevronLeft className="w-3.5 h-3.5 text-white/40" />
          <ChevronRight className="w-3.5 h-3.5 text-white/25" />
        </div>

        {/* Center URL bar */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 bg-[#1a1a1c] rounded-md px-6 py-1 text-[10px] text-white/60">
            <Monitor className="w-3 h-3 text-white/40" />
            questly.ai
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-2.5">
          <RotateCw className="w-3.5 h-3.5 text-white/40" />
          <Share className="w-3.5 h-3.5 text-white/40" />
          <Plus className="w-3.5 h-3.5 text-white/40" />
          <Copy className="w-3.5 h-3.5 text-white/40" />
        </div>
      </div>

      {/* Body: sidebar + main */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[22%] border-r border-white/5 bg-[#1e1e21] px-3 py-3.5">
          <div className="flex items-center justify-between mb-4">
            <Logo className="w-4 h-4 text-white/70" />
            <Grid className="w-3.5 h-3.5 text-white/30" />
          </div>

          {/* Workspace badge */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center justify-center w-4 h-4 rounded bg-[#e8553f] text-white text-[8px] font-medium">
              C
            </div>
            <span className="text-[10px] text-white/80">CareNest</span>
          </div>

          {/* Nav items */}
          <nav className="space-y-2.5 mb-5">
            <div className="flex items-center gap-2 text-[10px] text-white/60">
              <Compass className="w-3.5 h-3.5" />
              Uncover
            </div>
            <div className="flex items-center gap-2 text-[10px] text-white/60">
              <Layers className="w-3.5 h-3.5" />
              Subjects
            </div>
            <div className="flex items-center gap-2 text-[10px] text-white/60">
              <ListTodo className="w-3.5 h-3.5" />
              Inbox
            </div>
          </nav>

          {/* Recent articles */}
          <div className="text-[8px] tracking-wider text-white/35 mb-2">RECENT</div>
          <div className="space-y-2">
            {RECENT.map((title) => (
              <div key={title} className="flex items-start gap-1.5">
                <span className="mt-1 w-1.5 h-1.5 shrink-0 rounded-full bg-[#28c840]/70" />
                <span className="text-[9px] leading-tight text-white/50">{title}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-5 py-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#e8553f] text-white text-sm font-medium">
                C
              </div>
              <div>
                <div className="text-sm font-medium text-white">CareNest</div>
                <div className="text-[10px] text-white/45">In-home senior care content</div>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] text-white hover:bg-white/15"
            >
              <Sparkles className="w-3 h-3" />
              Generate
            </button>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-4 divide-x divide-white/5 rounded-xl bg-white/[0.03] ring-1 ring-white/5 mb-5">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-4 py-3">
                <div className="text-[8px] tracking-wider text-white/35 mb-1.5">{stat.label}</div>
                <div className="text-xl font-medium text-white leading-none mb-1">{stat.value}</div>
                <div className="text-[8px] tracking-wider text-white/35">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Subject cards */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {SUBJECTS.map((subject) => (
              <div
                key={subject.title}
                className="rounded-lg bg-white/[0.03] ring-1 ring-white/5 px-3.5 py-3"
              >
                <div className="text-[11px] font-medium text-white mb-1">{subject.title}</div>
                <div className="text-[8px] tracking-wider text-white/35">{subject.count}</div>
                <div className="text-[8px] tracking-wider text-white/35">{subject.posts}</div>
              </div>
            ))}
          </div>

          {/* Drafting inbox */}
          <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/5 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
              <span className="text-[10px] font-medium text-white">Drafting inbox</span>
              <span className="text-[8px] tracking-wider text-white/35">QUESTION · VOLUME · DIFFICULTY · STATUS</span>
            </div>
            <div className="divide-y divide-white/5">
              {INBOX.map((row) => (
                <div key={row.q} className="grid grid-cols-12 items-center px-4 py-2.5">
                  <span className="col-span-7 text-[10px] text-white/75 truncate pr-2">{row.q}</span>
                  <span className="col-span-2 text-[10px] text-white/45">{row.vol}</span>
                  <span className="col-span-2 text-[10px] text-white/45">{row.diff}</span>
                  <span
                    className={`col-span-1 text-[10px] text-right ${
                      row.status === 'Drafting' ? 'text-[#febc2e]/80' : 'text-white/45'
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
