import { useEffect, useState } from 'react'
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
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  const [displayRole, setDisplayRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'paused' | 'deleting'>('typing')

  useEffect(() => {
    const target = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (displayRole.length < target.length) {
        timeout = setTimeout(() => setDisplayRole(target.slice(0, displayRole.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setPhase('paused'), 2200)
      }
    } else if (phase === 'paused') {
      timeout = setTimeout(() => setPhase('deleting'), 0)
    } else {
      if (displayRole.length > 0) {
        timeout = setTimeout(() => setDisplayRole(displayRole.slice(0, -1)), 45)
      } else {
        timeout = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % ROLES.length)
          setPhase('typing')
        }, 0)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayRole, phase, roleIndex])

  return (
    <section id="home" className="hero-surface soft-grid-bg relative border-b border-white/8">
      <div className="relative mx-auto max-w-300 px-5 py-20 text-center lg:px-8 lg:py-32">

        {/* Availability badge */}
        <div className="animate-fade-up flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-5 py-2 font-mono-label text-[10px] font-bold uppercase tracking-[0.14em] text-[#f59e0b] md:text-xs">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
            />
            {profile.availability}
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-up mx-auto mt-7 max-w-4xl font-heading font-bold leading-none text-[#f5f0e8]">
          <span className="block text-[clamp(2.4rem,7.5vw,5.5rem)] transition duration-300 hover:text-[#f59e0b]">
            {profile.name}
          </span>
        </h1>

        {/* Typewriter role */}
        <p className="animate-fade-up-delay mx-auto mt-4 h-12 font-heading text-2xl font-semibold italic text-[#f59e0b] sm:text-3xl lg:text-4xl">
          {displayRole}
          <span
            className="inline-block w-0.5 translate-y-0.5 bg-[#f59e0b]"
            style={{
              height: '0.85em',
              animation: 'cursor-blink 1s step-end infinite',
              marginLeft: '2px',
            }}
            aria-hidden="true"
          />
        </p>

        {/* Decorative separator */}
        <div className="animate-fade-up-late mx-auto mt-8 flex items-center justify-center gap-5">
          <span className="h-px w-20 bg-linear-to-r from-transparent to-white/15" />
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#f59e0b]/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
            <span className="h-1 w-1 rounded-full bg-[#f59e0b]/50" />
          </span>
          <span className="h-px w-20 bg-linear-to-l from-transparent to-white/15" />
        </div>

        {/* Headline */}
        <p className="text-balance animate-fade-up-late mx-auto mt-8 max-w-2xl font-heading text-xl font-semibold leading-8 text-[#f5f0e8] sm:text-2xl lg:text-[1.65rem]">
          {profile.headline}
        </p>

        {/* Summary */}
        <p className="animate-fade-up-late mx-auto mt-5 max-w-2xl text-base leading-8 text-[#c4b5a0] sm:text-lg">
          {profile.summary}
        </p>

        {/* Focus chips */}
        <div className="animate-fade-up-late mt-7 flex flex-wrap justify-center gap-2">
          {profile.focusAreas.map((area) => (
            <span key={area} className="skill-chip px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em]">
              {area}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="animate-fade-up-late mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('#work')}
            className="primary-button rounded-lg bg-[#f59e0b] px-8 py-3.5 font-heading text-sm font-bold text-[#111010] transition hover:bg-[#fbbf24]"
          >
            View My Work
          </button>
          <button
            type="button"
            onClick={() => onNavigate('#contact')}
            className="rounded-lg border border-[#f59e0b]/35 px-8 py-3.5 font-heading text-sm font-bold text-[#f59e0b] transition hover:border-[#f59e0b] hover:bg-[#f59e0b]/10"
          >
            Hire Me
          </button>
        </div>

        {/* Profile photo */}
        <div className="animate-fade-up-delay relative mx-auto mt-16 w-full max-w-xs">
          <div className="absolute -inset-px rounded-2xl bg-linear-to-b from-[#f59e0b]/30 via-[#f59e0b]/10 to-transparent" />
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#1c1a18] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={`${profile.name} profile`}
                className="aspect-4/5 w-full object-cover object-top transition duration-500 hover:scale-[1.02]"
              />
            ) : (
              <div className="flex aspect-4/5 w-full items-center justify-center bg-[#1c1a18]">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#f59e0b]/30 bg-white/5 text-4xl font-semibold text-[#f59e0b]">
                  {initials}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="animate-fade-up rounded-xl border border-white/7 bg-[#1c1a18] p-4 transition hover:-translate-y-1 hover:border-[#f59e0b]/30 hover:shadow-[0_8px_24px_-8px_rgba(245,158,11,0.15)]"
              style={{ animationDelay: `${0.45 + i * 0.15}s` }}
            >
              <p className="font-heading text-lg font-bold text-[#f59e0b] sm:text-xl">{stat.value}</p>
              <p className="mt-1 text-xs leading-5 text-[#7a6e62] sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
