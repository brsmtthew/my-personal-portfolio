import { Fragment, useEffect, useState } from 'react'
import type { Profile, Stat } from '../../data/portfolio'

type HeroProps = {
  profile: Profile
  stats: Stat[]
  onNavigate: (href: string) => void
}

const ROLES = [
  'IT Specialist',
  'AI Workflow Developer',
  'EMR Systems Specialist',
  'IoT Developer',
  'Full Stack Developer',
]

function Hero({ profile, stats, onNavigate }: HeroProps) {
  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()

  const [displayRole, setDisplayRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'paused' | 'deleting'>('typing')

  useEffect(() => {
    const target = ROLES[roleIndex]
    let t: ReturnType<typeof setTimeout>
    if (phase === 'typing') {
      if (displayRole.length < target.length) {
        t = setTimeout(() => setDisplayRole(target.slice(0, displayRole.length + 1)), 80)
      } else {
        t = setTimeout(() => setPhase('paused'), 2200)
      }
    } else if (phase === 'paused') {
      t = setTimeout(() => setPhase('deleting'), 0)
    } else {
      if (displayRole.length > 0) {
        t = setTimeout(() => setDisplayRole(displayRole.slice(0, -1)), 45)
      } else {
        t = setTimeout(() => { setRoleIndex((i) => (i + 1) % ROLES.length); setPhase('typing') }, 0)
      }
    }
    return () => clearTimeout(t)
  }, [displayRole, phase, roleIndex])

  const nameWords = profile.name.split(' ').filter(Boolean)

  return (
    <section id="home" className="hero-surface section-glow soft-grid-bg relative min-h-[calc(100svh-72px)] border-b border-white/6">
      <div className="mx-auto flex max-w-300 min-h-[calc(100svh-72px)] flex-col justify-center px-5 py-16 lg:px-8">

        {/* ── Availability chip ── */}
        <div className="animate-fade-up mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#a3e635]/30 px-3 py-1.5 font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#a3e635]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a3e635]" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
            {profile.availability}
          </span>
        </div>

        {/* ── NAME — each word fades up with stagger ── */}
        <h1
          className="font-heading font-black text-white"
          style={{ fontSize: 'min(6rem, 7.5vw)', lineHeight: 1.05, letterSpacing: '-0.03em', whiteSpace: 'nowrap' }}
        >
          {nameWords.map((word, i) => (
            <Fragment key={i}>
              <span
                className="inline-block transition-colors duration-300 hover:text-[#a3e635]"
                style={{ animation: `fade-up 0.7s cubic-bezier(0.22,0.61,0.36,1) ${i * 0.1}s both` }}
              >
                {word}
              </span>
              {i < nameWords.length - 1 && ' '}
            </Fragment>
          ))}
        </h1>

        {/* ── Thin rule ── */}
        <div className="animate-fade-up-delay my-10 h-px bg-white/6" />

        {/* ── Two-column layout: statement + photo ── */}
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px]">

          {/* Left — statement content */}
          <div className="flex flex-col justify-center gap-5">

            {/* Typewriter role */}
            <div className="animate-fade-up-delay flex items-center gap-3">
              <span className="h-px w-8 bg-[#a3e635]" />
              <p className="font-mono-label text-sm uppercase tracking-[0.18em] text-[#a3e635]">
                {displayRole}
                <span
                  className="inline-block w-0.5 bg-[#a3e635]"
                  style={{ height: '0.85em', marginLeft: '2px', animation: 'cursor-blink 1s step-end infinite', verticalAlign: 'middle' }}
                  aria-hidden="true"
                />
              </p>
            </div>

            {/* Summary */}
            <p className="animate-fade-up-late text-base leading-7 text-[#888] sm:text-lg">
              {profile.summary}
            </p>

            {/* Focus chips */}
            <div className="animate-fade-up-late flex flex-wrap gap-2">
              {profile.focusAreas.map((area) => (
                <span key={area} className="skill-chip px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em]">
                  {area}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-fade-up-late flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('#work')}
                className="primary-button rounded-2xl bg-[#a3e635] px-7 py-3 font-mono-label text-sm font-bold uppercase tracking-[0.14em] text-[#0a0a0a] transition hover:bg-[#84cc16]"
              >
                View My Work →
              </button>
              <button
                type="button"
                onClick={() => onNavigate('#contact')}
                className="rounded-2xl border border-white/12 px-7 py-3 font-mono-label text-sm uppercase tracking-[0.14em] text-[#888] transition hover:border-white/30 hover:text-white"
              >
                Hire Me
              </button>
            </div>

            {/* Stats */}
            <div className="animate-fade-up-late mt-2 grid grid-cols-3 gap-3 border-t border-white/6 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="surface-panel px-4 py-4 text-center">
                  <p className="font-heading text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 font-mono-label text-[9px] uppercase tracking-[0.14em] text-[#555]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="hidden lg:flex lg:items-start lg:pt-1">
            <div className="glass-card w-full overflow-hidden">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={`${profile.name} profile`}
                  className="float-slow aspect-3/4 w-full object-cover object-top"
                />
              ) : (
                <div className="flex aspect-3/4 w-full items-center justify-center">
                  <span className="font-heading text-7xl font-black text-[#a3e635]/20">{initials}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
