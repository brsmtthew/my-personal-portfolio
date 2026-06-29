import { useState } from 'react'
import type { IconType } from 'react-icons'
import { FiAward, FiBriefcase, FiBook, FiCheckCircle, FiFileText, FiHome, FiLayers, FiMenu, FiMessageCircle, FiUser, FiX } from 'react-icons/fi'
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
  { href: '#home',       icon: FiHome,        label: 'Home'    },
  { href: '#about',      icon: FiUser,        label: 'About'   },
  { href: '#skills',     icon: FiLayers,      label: 'Skills'  },
  { href: '#work',       icon: FiBriefcase,   label: 'Work'    },
  { href: '#experience', icon: FiAward,       label: 'Exp'     },
  { href: '#education',  icon: FiBook,        label: 'Edu'     },
  { href: '#certificates', icon: FiCheckCircle, label: 'Certs' },
  { href: '#contact',    icon: FiMessageCircle, label: 'Contact' },
]

const navIcons: Record<string, IconType> = {
  '#about': FiUser,
  '#skills': FiLayers,
  '#work': FiBriefcase,
  '#experience': FiAward,
  '#education': FiBook,
  '#certificates': FiCheckCircle,
  '#contact': FiMessageCircle,
}

function Header({ activeSection, name, navItems, onNavigate, onOpenCv, photoUrl }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleNavigate(href: string) {
    onNavigate(href)
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/8 bg-[#0a0a0a]/80 backdrop-blur-xl" style={{ boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)' }}>
        <nav className="mx-auto flex h-18 max-w-300 items-center justify-between px-5 lg:px-8">
          {/* Logo — initials + name */}
          <button
            type="button"
            onClick={() => handleNavigate('#home')}
            className="group hidden items-center gap-3 lg:flex"
          >
            <img
              src={photoUrl}
              alt={`${name} profile`}
              className="h-8 w-8 rounded-full object-cover object-top border border-white/10 transition group-hover:border-[#a3e635]/50"
            />
            <span className="hidden font-mono-label text-sm font-bold tracking-wide text-white transition group-hover:text-[#a3e635] xl:inline">
              {name}
            </span>
          </button>

          {/* Mobile: hamburger */}
          <button
            type="button"
            className={`order-first flex h-8 w-8 items-center justify-center rounded-xl border transition-colors duration-200 lg:hidden ${
              isMenuOpen
                ? 'border-[#a3e635]/40 bg-[#a3e635]/10 text-[#a3e635]'
                : 'border-white/8 text-[#888] hover:border-white/20 hover:text-white'
            }`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((o) => !o)}
          >
            <span
              className="inline-flex transition-transform duration-300 ease-out"
              style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMenuOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
            </span>
          </button>

          {/* Mobile: name center */}
          <button
            type="button"
            className="flex items-center gap-2 lg:hidden"
            onClick={() => handleNavigate('#home')}
          >
            <img
              src={photoUrl}
              alt={`${name} profile`}
              className="h-7 w-7 rounded-full object-cover object-top"
            />
            <span className="font-mono-label text-sm font-bold text-white">{name.split(' ')[0]}</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavigate(item.href)}
                  className={`nav-item font-mono-label text-xs uppercase tracking-[0.14em] transition-colors duration-200 ${
                    isActive ? 'nav-active text-[#a3e635]' : 'text-[#888] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={onOpenCv}
              className="hidden rounded-xl border border-white/10 px-4 py-2 font-mono-label text-xs uppercase tracking-[0.14em] text-[#888] transition hover:border-white/25 hover:text-white xl:block"
            >
              View CV
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('#contact')}
              className="primary-button rounded-xl bg-[#a3e635] px-4 py-2 font-mono-label text-xs font-bold uppercase tracking-[0.14em] text-[#0a0a0a] transition hover:bg-[#84cc16]"
            >
              Hire Me →
            </button>
          </div>

          {/* Mobile: CV icon */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/8 text-[#888] transition hover:border-white/20 hover:text-white lg:hidden"
            aria-label="View CV"
            onClick={onOpenCv}
          >
            <FiFileText className="h-4 w-4" />
          </button>
        </nav>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div
            className="border-t border-white/8 bg-[#0a0a0a]/95 px-4 pb-5 backdrop-blur-xl lg:hidden"
            style={{ animation: 'menu-drop 0.28s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="grid gap-1 pt-3">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '')
                const Icon = navIcons[item.href] ?? FiHome
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavigate(item.href)}
                    style={{ animation: `menu-item-in 0.42s cubic-bezier(0.16,1,0.3,1) ${index * 0.05}s both` }}
                    className={`group relative flex items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-left font-mono-label text-xs uppercase tracking-[0.18em] transition-colors duration-200 ${
                      isActive ? 'bg-[#a3e635]/10 text-[#a3e635]' : 'text-[#888] hover:bg-white/4 hover:text-white'
                    }`}
                  >
                    {/* Active / hover accent bar */}
                    <span
                      className={`absolute left-0 top-1/2 w-0.5 -translate-y-1/2 rounded-r-full bg-[#a3e635] transition-all duration-300 ${
                        isActive ? 'h-6' : 'h-0 group-hover:h-4'
                      }`}
                    />
                    <Icon
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                        isActive ? 'text-[#a3e635]' : 'text-[#555] group-hover:text-[#a3e635]'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">{item.label}</span>
                    <span
                      className={`ml-auto font-mono-label text-[10px] tracking-normal transition-colors duration-200 ${
                        isActive ? 'text-[#a3e635]/70' : 'text-[#444] group-hover:text-[#777]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </header>

      {/* Mobile bottom dock */}
      <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0a0a0a]/75 backdrop-blur-2xl lg:hidden" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
        <div className="flex overflow-x-auto px-1" style={{ scrollbarWidth: 'none' }}>
          {mobileDockItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            const Icon = item.icon
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigate(item.href)}
                className={`dock-item flex flex-1 shrink-0 flex-col items-center gap-1 py-3 transition-colors duration-200 ${
                  isActive ? 'dock-active text-[#a3e635]' : 'text-[#666] hover:text-[#999]'
                }`}
                style={{ minWidth: '2.5rem' }}
              >
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                <span className="font-mono-label text-[8px] uppercase tracking-widest">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default Header
