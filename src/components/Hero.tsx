import { useLayoutEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowUp, Sparkles } from 'lucide-react'
import Navbar from './Navbar'
import DashboardMockup from './DashboardMockup'

const HERO_BG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260611_133301_d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.png&w=1280&q=85'

const GRASS =
  'https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png'

const DESIGN_WIDTH = 896

/**
 * Renders its children at a fixed design width and scales them down with a CSS
 * transform so they fit the available container width. The outer wrapper's
 * height tracks the scaled inner height to avoid layout overflow.
 */
function ScaledDashboard({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState<number>()

  useLayoutEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const update = () => {
      const available = container.offsetWidth
      const nextScale = Math.min(available / DESIGN_WIDTH, 1)
      setScale(nextScale)
      setHeight(inner.offsetHeight * nextScale)
    }

    update()

    const ro = new ResizeObserver(update)
    ro.observe(container)
    ro.observe(inner)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={containerRef} style={{ height }}>
      <div
        ref={innerRef}
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function Hero() {
  // Keep the search input controlled so the form is interactive.
  const [query, setQuery] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-cover bg-center flex flex-col font-sans"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <Navbar />

      {/* Spacer between navbar and content */}
      <div className="flex-1 min-h-8 sm:min-h-12 lg:min-h-16 shrink-0" />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center text-center px-5">
        <h1 className="text-gray-900 font-normal leading-[1.05] tracking-tight text-[40px] min-[400px]:text-[44px] sm:text-6xl lg:text-7xl xl:text-[80px]">
          <span className="block animate-fade-up">Get cited.</span>
          <span className="block animate-fade-up [animation-delay:100ms]">Effortlessly.</span>
        </h1>

        {/* Search bar */}
        <form
          onSubmit={handleSubmit}
          className="animate-fade-up [animation-delay:220ms] mt-5 sm:mt-6 w-full max-w-xl"
        >
          <div className="flex items-center gap-3 rounded-full bg-white/60 backdrop-blur-md ring-1 ring-gray-200 pl-5 pr-1.5 py-1.5">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What makes content rank in AI search?"
              className="flex-1 bg-transparent text-sm sm:text-base text-gray-900 placeholder-gray-500 outline-none py-2"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-900 text-white hover:scale-105 active:scale-95 transition-transform shrink-0"
            >
              <ArrowUp className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </form>

        {/* Description */}
        <p className="animate-fade-up [animation-delay:340ms] mt-4 sm:mt-5 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
          Ship articles that answer actual customer questions
          <br />
          -- and be seen on <Sparkles className="inline w-4 h-4 -mt-1" /> ChatGPT
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up [animation-delay:460ms] mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="bg-gray-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 hover:shadow-lg transition-all"
          >
            Try It Free
          </a>
          <a
            href="#"
            className="text-gray-700 text-sm font-medium px-6 py-2.5 rounded-full ring-1 ring-gray-300 hover:bg-gray-100 transition-colors"
          >
            Talk to sales
          </a>
        </div>
      </div>

      {/* Spacer between content and dashboard */}
      <div className="flex-1 min-h-10 sm:min-h-12 lg:min-h-16 shrink-0" />

      {/* Dashboard mockup */}
      <div className="animate-hero-rise [animation-delay:620ms] relative z-0 w-[92%] sm:w-[84%] lg:w-[72%] max-w-4xl mx-auto shrink-0 -mb-10 sm:-mb-20 lg:-mb-32">
        <ScaledDashboard>
          <DashboardMockup />
        </ScaledDashboard>
      </div>

      {/* Grass overlay */}
      <img
        src={GRASS}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none"
      />
    </section>
  )
}
