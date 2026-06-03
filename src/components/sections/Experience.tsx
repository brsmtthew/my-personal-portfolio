import SectionHeading from '../ui/SectionHeading'
import type { Experience as ExperienceItem } from '../../data/portfolio'

type ExperienceProps = {
  experiences: ExperienceItem[]
}

function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="section-glow bg-[#0f0f0f] px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <SectionHeading
          eyebrow="Experience"
          title="Real work across medical records, technical support, and creative operations."
        />

        <div className="flex flex-col gap-5">
          {experiences.map((item, index) => (
            <article
              key={`${item.role}-${item.company}`}
              data-reveal
              data-reveal-delay={String(Math.min(index + 1, 3)) as '1' | '2' | '3'}
              className="glass-card card-hover group flex flex-col p-6 md:p-8"
            >
              {/* ── Header row ── */}
              <div className="mb-5 flex flex-wrap items-start justify-between gap-x-6 gap-y-3 border-b border-white/8 pb-5">
                <div className="flex items-start gap-4">
                  <span className="mt-1 font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#a3e635]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold leading-tight text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#555]">{item.company}</p>
                  </div>
                </div>
                <span className="self-start rounded-full border border-white/10 px-3 py-1 font-mono-label text-[10px] uppercase tracking-[0.14em] text-[#555]">
                  {item.period}
                </span>
              </div>

              {/* ── Bullet points — full width ── */}
              <ul className="grid gap-3 sm:grid-cols-2">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-3 text-sm leading-6 text-[#666] transition-colors group-hover:text-[#888]"
                  >
                    <span className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-[#a3e635]/35 transition group-hover:bg-[#a3e635]/70" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
