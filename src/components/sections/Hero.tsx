import type { Profile, Stat } from '../../data/portfolio'

type HeroProps = {
  profile: Profile
  stats: Stat[]
}

function Hero({ profile, stats }: HeroProps) {
  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <section id="home" className="hero-surface soft-grid-bg relative border-b border-white/10">
      <div className="relative mx-auto grid min-h-[calc(100svh-64px)] max-w-300 items-center gap-10 px-5 py-10 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="animate-fade-up text-center md:text-left">
          <p className="inline-flex rounded-full border border-[#00f2ea]/30 bg-[#00f2ea]/10 px-4 py-2 font-mono-label text-[10px] font-bold uppercase tracking-[0.12em] text-[#cffffb] md:text-xs">
            {profile.availability}
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl font-heading font-bold leading-[1.06] text-[#d4e4fa] lg:mx-0">
            <span className="inline-block whitespace-nowrap text-[clamp(1.45rem,6.5vw,3.75rem)] transition duration-200 hover:-translate-y-0.5 hover:text-[#00f2ea] hover:drop-shadow-[0_0_18px_rgba(0,242,234,0.2)]">
              {profile.name}
            </span>
            <span className="block bg-linear-to-r from-[#00f2ea] via-[#cffffb] to-[#8defff] bg-clip-text text-4xl text-transparent sm:text-5xl lg:text-6xl">
              {profile.role}
            </span>
          </h1>
          <p className="text-balance mx-auto mt-5 max-w-2xl font-heading text-xl font-semibold leading-8 text-white sm:text-2xl lg:mx-0">
            {profile.headline}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#b9cac8] sm:text-lg lg:mx-0">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {profile.focusAreas.map((area) => (
              <span key={area} className="skill-chip px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em]">
                {area}
              </span>
            ))}
          </div>
        </div>

        <aside className="glass-card animate-fade-up-delay float-slow order-first mx-auto w-full max-w-xs p-3 md:order-0 md:max-w-md md:p-4">
          <div className="mx-auto overflow-hidden rounded-full border-2 border-[#00f2ea] bg-[#0d1c2d] shadow-[0_0_40px_rgba(0,242,234,0.15)] md:rounded-lg md:border-0">
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={`${profile.name} profile`}
                className="aspect-square w-full object-cover object-top transition duration-500 hover:scale-[1.03] md:aspect-auto md:h-96 lg:h-120"
              />
            ) : (
              <div className="flex aspect-square w-full items-center justify-center bg-linear-to-br from-teal-950 via-zinc-950 to-blue-950 md:h-96">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#00f2ea]/20 bg-white/10 text-4xl font-semibold text-[#cffffb] shadow-sm">
                  {initials}
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-[#010f1f]/70 p-4 transition hover:-translate-y-1 hover:border-[#00f2ea]/40">
                <p className="font-heading text-lg font-bold text-[#d4e4fa]">{stat.value}</p>
                <p className="mt-1 text-sm leading-5 text-[#849492]">{stat.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
