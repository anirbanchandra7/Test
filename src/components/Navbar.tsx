import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = ['Toolkit', 'Plans', 'News']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="animate-fade-down relative z-20 flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4 sm:py-5">
      {/* Logo */}
      <a href="#" className="flex items-center text-gray-900">
        <Logo className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8">
        <a
          href="#"
          className="flex items-center gap-1 text-[13px] text-gray-700 hover:text-gray-900"
        >
          Toolkit
          <ChevronDown className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="text-[13px] text-gray-700 hover:text-gray-900">
          Plans
        </a>
        <a href="#" className="text-[13px] text-gray-700 hover:text-gray-900">
          News
        </a>
      </div>

      {/* Right side: CTA + hamburger */}
      <div className="flex items-center gap-2">
        <a
          href="#"
          className="bg-gray-900 text-white text-[13px] font-medium px-4 sm:px-5 py-2 rounded-full hover:bg-gray-800"
        >
          Get Started
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-gray-900 hover:bg-gray-900/10"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute left-4 right-4 top-full rounded-2xl bg-white/80 backdrop-blur-xl ring-1 ring-gray-200 px-5 py-3 animate-fade-up">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="block py-3 text-[15px] text-gray-700 hover:text-gray-900 border-b border-gray-200 last:border-b-0"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
