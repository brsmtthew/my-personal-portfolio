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
  { href: '#work', icon: FiBriefcase, label: 'Projects' },
  { href: '#skills', icon: FiLayers, label: 'Skills' },
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
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#051424]/80 shadow-[0_0_20px_rgba(0,242,234,0.05)] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-300 items-center justify-between gap-4 px-5 lg:px-8">
          <button
            type="button"
            className="group hidden shrink-0 items-center gap-3 text-left lg:flex"
            onClick={() => handleNavigate('#home')}
          >
            <img
              src={photoUrl}
              alt={`${name} profile`}
              className="h-9 w-9 rounded-full border border-[#00f2ea]/40 object-cover object-top shadow-[0_0_18px_rgba(0,242,234,0.14)] transition duration-200 group-hover:scale-105 group-hover:border-[#00f2ea]"
            />
            <span className="whitespace-nowrap font-heading text-base font-bold tracking-tight text-[#d4e4fa] transition group-hover:text-[#00f2ea]">
              {name}
            </span>
          </button>

          <button
            type="button"
            className="order-first flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#00f2ea] hover:border-[#00f2ea]/40 hover:bg-white/10 lg:hidden"
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
              className="h-8 w-8 rounded-full border border-[#00f2ea]/40 object-cover object-top"
            />
            <span className="whitespace-nowrap font-heading text-[clamp(0.72rem,3.2vw,0.95rem)] font-bold tracking-tight text-[#d4e4fa]">
              {name}
            </span>
          </button>

          <div className="hidden items-center gap-8 text-sm font-semibold text-[#b9cac8] lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')

              return (
                <button
                  key={item.href}
                  type="button"
                  className={`relative shrink-0 py-2 ${
                    isActive
                      ? 'text-[#00f2ea] after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[#00f2ea]'
                      : 'hover:text-[#d4e4fa]'
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
              className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-bold text-[#d4e4fa] hover:border-[#00f2ea]/60 hover:text-[#00f2ea]"
              onClick={onOpenCv}
            >
              View CV
            </button>
            <button
              type="button"
              className="primary-button rounded-lg bg-[#00f2ea] px-5 py-2.5 text-sm font-bold text-[#051424]"
              onClick={() => handleNavigate('#contact')}
            >
              Hire Me
            </button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#00f2ea] hover:border-[#00f2ea]/40 hover:bg-white/10 lg:hidden"
            aria-label="View CV"
            onClick={onOpenCv}
          >
            <FiFileText className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>

        {isMenuOpen ? (
          <div id="mobile-navigation" className="border-t border-white/10 bg-[#051424]/95 px-5 pb-5 lg:hidden">
            <div className="mx-auto grid max-w-6xl gap-2 pt-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')

                return (
                  <button
                    key={item.href}
                    type="button"
                    className={`rounded-lg px-4 py-3 text-left font-mono-label text-xs uppercase tracking-[0.16em] ${
                      isActive
                        ? 'bg-[#00f2ea] text-[#051424]'
                        : 'bg-white/5 text-[#d4e4fa] hover:bg-white/10 hover:text-[#00f2ea]'
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

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0d1c2d]/95 px-3 py-2 backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
          {mobileDockItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            const Icon = item.icon

            return (
              <button
                key={item.href}
                type="button"
                className={`rounded-lg px-2 py-2 text-center ${
                  isActive ? 'text-[#00f2ea]' : 'text-[#849492]'
                }`}
                onClick={() => handleNavigate(item.href)}
              >
                <Icon className="mx-auto h-4 w-4" aria-hidden="true" />
                <span className="mt-1 block font-mono-label text-[10px]">{item.label}</span>
                {isActive ? <span className="mx-auto mt-1 block h-1 w-1 rounded-full bg-[#00f2ea]" /> : null}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default Header
