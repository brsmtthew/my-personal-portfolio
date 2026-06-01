import { useState } from 'react'
import { FiBriefcase, FiFileText, FiHome, FiLayers, FiMenu, FiMessageCircle, FiX } from 'react-icons/fi'
import type { NavItem } from '../../data/portfolio'

type HeaderProps = {
  activeSection: string
  name: string
  navItems: NavItem[]
  onNavigate: (href: string) => void
  onOpenCv: () => void
  photoUrl: string
}

const mobileDockItems = [
  { href: '#home', icon: FiHome, label: 'Home' },
  { href: '#skills', icon: FiLayers, label: 'Skills' },
  { href: '#work', icon: FiBriefcase, label: 'Projects' },
  { href: '#contact', icon: FiMessageCircle, label: 'Connect' },
]

function Header({ activeSection, name, navItems, onNavigate, onOpenCv, photoUrl }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleNavigate(href: string) {
    onNavigate(href)
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/8 bg-[#111010]/88 shadow-[0_1px_20px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-300 items-center justify-between gap-4 px-5 lg:px-8">
          <button
            type="button"
            className="group hidden shrink-0 items-center gap-3 text-left lg:flex"
            onClick={() => handleNavigate('#home')}
          >
            <img
              src={photoUrl}
              alt={`${name} profile`}
              className="h-9 w-9 rounded-full border border-[#f59e0b]/30 object-cover object-top shadow-[0_0_12px_rgba(245,158,11,0.12)] transition duration-200 group-hover:scale-105 group-hover:border-[#f59e0b]"
            />
            <span className="whitespace-nowrap font-heading text-base font-bold tracking-tight text-[#f5f0e8] transition group-hover:text-[#f59e0b]">
              {name}
            </span>
          </button>

          <button
            type="button"
            className="order-first flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 text-[#f59e0b] hover:border-[#f59e0b]/35 hover:bg-[#f59e0b]/8 lg:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FiX className="h-5 w-5" aria-hidden="true" /> : <FiMenu className="h-5 w-5" aria-hidden="true" />}
          </button>

          <button
            type="button"
            className="flex min-w-0 items-center justify-center gap-2 lg:hidden"
            onClick={() => handleNavigate('#home')}
          >
            <img
              src={photoUrl}
              alt={`${name} profile`}
              className="h-8 w-8 rounded-full border border-[#f59e0b]/30 object-cover object-top"
            />
            <span className="whitespace-nowrap font-heading text-[clamp(0.72rem,3.2vw,0.95rem)] font-bold tracking-tight text-[#f5f0e8]">
              {name}
            </span>
          </button>

          <div className="hidden items-center gap-8 text-sm font-semibold text-[#c4b5a0] lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')

              return (
                <button
                  key={item.href}
                  type="button"
                  className={`relative shrink-0 py-2 transition ${
                    isActive
                      ? 'text-[#f59e0b] after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[#f59e0b]'
                      : 'hover:text-[#f5f0e8]'
                  }`}
                  onClick={() => handleNavigate(item.href)}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className="rounded-lg border border-white/8 px-5 py-2.5 text-sm font-bold text-[#c4b5a0] transition hover:border-[#f59e0b]/40 hover:text-[#f59e0b]"
              onClick={onOpenCv}
            >
              View CV
            </button>
            <button
              type="button"
              className="primary-button rounded-lg bg-[#f59e0b] px-5 py-2.5 text-sm font-bold text-[#111010] transition hover:bg-[#fbbf24]"
              onClick={() => handleNavigate('#contact')}
            >
              Hire Me
            </button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 text-[#f59e0b] hover:border-[#f59e0b]/35 hover:bg-[#f59e0b]/8 lg:hidden"
            aria-label="View CV"
            onClick={onOpenCv}
          >
            <FiFileText className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>

        {isMenuOpen ? (
          <div id="mobile-navigation" className="border-t border-white/8 bg-[#111010]/98 px-5 pb-5 lg:hidden">
            <div className="mx-auto grid max-w-6xl gap-2 pt-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')

                return (
                  <button
                    key={item.href}
                    type="button"
                    className={`rounded-lg px-4 py-3 text-left font-mono-label text-xs uppercase tracking-[0.16em] ${
                      isActive
                        ? 'bg-[#f59e0b] text-[#111010]'
                        : 'bg-white/5 text-[#c4b5a0] hover:bg-white/8 hover:text-[#f59e0b]'
                    }`}
                    onClick={() => handleNavigate(item.href)}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        ) : null}
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/8 bg-[#0d0c0b]/96 px-3 py-2 backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
          {mobileDockItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            const Icon = item.icon

            return (
              <button
                key={item.href}
                type="button"
                className={`rounded-lg px-2 py-2 text-center transition ${
                  isActive ? 'text-[#f59e0b]' : 'text-[#7a6e62]'
                }`}
                onClick={() => handleNavigate(item.href)}
              >
                <Icon className="mx-auto h-4 w-4" aria-hidden="true" />
                <span className="mt-1 block font-mono-label text-[10px]">{item.label}</span>
                {isActive ? <span className="mx-auto mt-1 block h-1 w-1 rounded-full bg-[#f59e0b]" /> : null}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default Header
