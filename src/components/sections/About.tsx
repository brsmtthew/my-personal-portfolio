import SectionHeading from '../ui/SectionHeading'
import type { Highlight, Profile } from '../../data/portfolio'

type AboutProps = {
  profile: Profile
  highlights: Highlight[]
}

function About({ profile, highlights }: AboutProps) {
  return (
    <section id="about" className="px-5 py-16 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <SectionHeading
          eyebrow="About"
          title="A practical IT professional who connects people, systems, and reliable workflows."
          description="Built for employers and clients who need dependable support, accurate data handling, and technology that improves daily operations."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card animate-fade-up p-6">
            <div className="mb-5 flex items-center gap-3">
              <img
                src={profile.photoUrl}
                alt={`${profile.name} profile`}
                className="h-12 w-12 rounded-full border border-[#f59e0b]/30 object-cover object-top shadow-[0_0_14px_rgba(245,158,11,0.12)]"
              />
              <div>
                <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[#f59e0b]/70">
                  Profile Summary
                </p>
                <h3 className="font-heading text-xl font-bold text-[#f5f0e8]">About Boris</h3>
              </div>
            </div>
            <p className="text-base leading-8 text-[#c4b5a0] md:text-lg">{profile.summary}</p>
            <div className="mt-6 space-y-3 text-sm text-[#7a6e62]">
              <p>
                <span className="font-bold text-[#f5f0e8]">Location:</span> {profile.location}
              </p>
              <p>
                <span className="font-bold text-[#f5f0e8]">Availability:</span>{' '}
                <span className="text-[#f59e0b]">{profile.availability}</span>
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((highlight, index) => (
              <article key={highlight.title} className="glass-card card-hover p-6">
                <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#f59e0b]/60">
                  Expertise {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-heading text-lg font-bold text-[#f5f0e8]">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#7a6e62]">{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
