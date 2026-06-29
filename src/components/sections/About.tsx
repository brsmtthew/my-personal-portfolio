import SectionHeading from '../ui/SectionHeading'
import type { Highlight, Profile } from '../../data/portfolio'

type AboutProps = {
  profile: Profile
  highlights: Highlight[]
}

function About({ profile, highlights }: AboutProps) {
  return (
    <section id="about" className="section-glow px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <SectionHeading
          eyebrow="About"
          title="A practical IT professional who connects people, systems, and reliable workflows."
        />

        {/* Top row: profile card + bio */}
        <div className="mb-6 grid items-stretch gap-5 lg:grid-cols-[260px_1fr]">
          {/* Profile photo panel */}
          <div data-reveal className="glass-card relative p-6 flex flex-col gap-5">
            <img
              src={profile.photoUrl}
              alt={`${profile.name} profile`}
              className="w-full aspect-square object-cover object-top rounded-xl"
            />
            <div>
              <h3 className="font-heading text-lg font-bold leading-tight text-white">{profile.name}</h3>
              <p className="mt-1.5 text-xs leading-5 text-[#777]">{profile.role}</p>
            </div>
            <div className="flex flex-1 flex-col gap-4 border-t border-white/8 pt-4">
              <div className="space-y-1">
                <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#a3e635]">Location</p>
                <p className="text-sm text-[#888]">{profile.location}</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#a3e635]">Email</p>
                <a href={`mailto:${profile.email}`} className="block break-all text-sm text-[#888] transition hover:text-[#a3e635]">{profile.email}</a>
              </div>
              <div className="space-y-1">
                <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#a3e635]">Phone</p>
                <a href={`tel:${profile.phone}`} className="block text-sm text-[#888] transition hover:text-[#a3e635]">{profile.phone}</a>
              </div>
              <div className="mt-auto space-y-1">
                <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#a3e635]">Status</p>
                <p className="flex items-center gap-2 text-sm text-white">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a3e635]" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
                  {profile.availability}
                </p>
              </div>
            </div>
          </div>

          {/* Bio panel */}
          <div data-reveal data-reveal-delay="1" className="glass-card p-6 lg:p-8 flex flex-col gap-6">
            <div>
              <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#666] mb-3">Profile Summary</p>
              <p className="text-base leading-8 text-[#999] lg:text-lg">{profile.summary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.focusAreas.map((area) => (
                <span key={area} className="skill-chip px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {highlights.map((highlight, index) => (
            <article
              key={highlight.title}
              data-reveal
              data-reveal-delay={String(index + 1) as '1' | '2' | '3'}
              className="glass-card card-hover p-6 lg:p-8"
            >
              <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#a3e635]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">{highlight.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#666]">{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
