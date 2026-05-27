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
                className="h-12 w-12 rounded-full border border-[#00f2ea]/40 object-cover object-top shadow-[0_0_18px_rgba(0,242,234,0.14)]"
              />
              <div>
                <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[#00f2ea]/70">
                  Profile Summary
                </p>
                <h3 className="font-heading text-xl font-bold text-[#d4e4fa]">About Boris</h3>
              </div>
            </div>
            <p className="text-base leading-8 text-[#b9cac8] md:text-lg">{profile.summary}</p>
            <div className="mt-6 space-y-3 text-sm text-zinc-400">
              <p>
                <span className="font-bold text-[#d4e4fa]">Location:</span> {profile.location}
              </p>
              <p>
                <span className="font-bold text-[#d4e4fa]">Availability:</span>{' '}
                {profile.availability}
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((highlight, index) => (
              <article key={highlight.title} className="glass-card card-hover p-6">
                <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#00f2ea]/70">
                  Expertise {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-heading text-lg font-bold text-[#d4e4fa]">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#b9cac8]">{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
