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
      <div className="relative mx-auto grid min-h-[calc(100svh-64px)] max-w-300 items-center gap-10 px-5 py-10 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">

        {/* Left — text */}
        <div className="animate-fade-up text-center md:text-left">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-4 py-2 font-mono-label text-[10px] font-bold uppercase tracking-[0.12em] text-[#f59e0b] md:text-xs">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
            />
            {profile.availability}
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl font-heading font-bold leading-[1.06] text-[#f5f0e8] lg:mx-0">
            <span className="inline-block whitespace-nowrap text-[clamp(1.45rem,6.5vw,3.75rem)] transition duration-200 hover:-translate-y-0.5 hover:text-[#f59e0b]">
              {profile.name}
            </span>
            <span className="mt-1 block h-14 text-3xl font-semibold italic text-[#f59e0b] sm:text-4xl lg:text-5xl">
              {displayRole}
              <span
                className="inline-block w-0.5 translate-y-0.5 bg-[#f59e0b]"
                style={{ height: '0.85em', animation: 'cursor-blink 1s step-end infinite', marginLeft: '2px' }}
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="text-balance mx-auto mt-5 max-w-2xl font-heading text-xl font-semibold leading-8 text-[#f5f0e8] sm:text-2xl lg:mx-0">
            {profile.headline}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#c4b5a0] sm:text-lg lg:mx-0">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {profile.focusAreas.map((area) => (
              <span key={area} className="skill-chip px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em]">
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <button
              type="button"
              onClick={() => onNavigate('#work')}
              className="primary-button rounded-lg bg-[#f59e0b] px-6 py-3 font-heading text-sm font-bold text-[#111010] transition hover:bg-[#fbbf24]"
            >
              View My Work
            </button>
            <button
              type="button"
              onClick={() => onNavigate('#contact')}
              className="rounded-lg border border-[#f59e0b]/35 px-6 py-3 font-heading text-sm font-bold text-[#f59e0b] transition hover:border-[#f59e0b] hover:bg-[#f59e0b]/10"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Right — image card */}
        <aside className="glass-card float-slow animate-fade-up-delay order-first mx-auto w-full max-w-xs p-3 md:order-0 md:max-w-md md:p-4">
          <div className="overflow-hidden rounded-xl border border-[#f59e0b]/20 bg-[#1c1a18] shadow-[0_0_40px_rgba(245,158,11,0.1)] md:rounded-lg">
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={`${profile.name} profile`}
                className="aspect-square w-full object-cover object-top transition duration-500 hover:scale-[1.03] md:aspect-auto md:h-96 lg:h-120"
              />
            ) : (
              <div className="flex aspect-square w-full items-center justify-center bg-[#1c1a18] md:h-96">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#f59e0b]/20 bg-white/5 text-4xl font-semibold text-[#f59e0b]">
                  {initials}
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="animate-fade-up rounded-lg border border-white/8 bg-[#1c1a18] p-4 transition hover:-translate-y-1 hover:border-[#f59e0b]/35 hover:shadow-[0_6px_20px_-8px_rgba(245,158,11,0.2)]"
                style={{ animationDelay: `${0.45 + i * 0.15}s` }}
              >
                <p className="font-heading text-lg font-bold text-[#f59e0b]">{stat.value}</p>
                <p className="mt-1 text-sm leading-5 text-[#7a6e62]">{stat.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
