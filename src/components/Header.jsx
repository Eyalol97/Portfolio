import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Work', to: '/#work' },
  { label: 'Process', to: '/#process' },
  { label: 'Education', to: '/#education' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-paper-100/90 backdrop-blur-md border-b border-paper-300'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2 font-mono text-sm tracking-tight text-ink-900">
          <span className="text-ink-900">
            Eyal Nahum <span className="text-ink-500">/ Product</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              className="text-sm text-ink-500 transition-colors hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-rust-500/40 bg-rust-500/10 px-4 py-1.5 text-sm font-medium text-rust-600 transition-colors hover:bg-rust-500/20"
          >
            Let's talk
            <ArrowRight size={14} />
          </a>
        </nav>
        <button
          className="text-ink-700 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-paper-300 bg-paper-100 md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-ink-700 hover:bg-paper-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
