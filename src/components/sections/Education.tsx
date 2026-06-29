import SectionHeading from '../ui/SectionHeading'
import type { Education as EducationItem } from '../../data/portfolio'

type EducationProps = {
  education: EducationItem[]
}

function Education({ education }: EducationProps) {
  return (
    <section id="education" className="section-glow px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <SectionHeading
          eyebrow="Education"
          title="The academic foundation behind my technical work."
        />

        {/* Education cards */}
        <div className="flex flex-col gap-5">
          {education.map((item, index) => (
            <article
              key={item.school}
              data-reveal
              data-reveal-delay={String(index + 1) as '1' | '2'}
              className="glass-card card-hover group flex flex-col p-6 md:p-8"
            >
              {/* ── Header row ── */}
              <div className="mb-5 flex flex-wrap items-start justify-between gap-x-6 gap-y-3 border-b border-white/8 pb-5">
                <div>
                  <span className="inline-block rounded-full border border-[#a3e635]/30 px-3 py-1 font-mono-label text-[10px] uppercase tracking-[0.14em] text-[#a3e635]">
                    {item.period}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-white">{item.school}</h3>
                  <p className="mt-1 text-xs text-[#555] leading-5">{item.degree}</p>
                </div>
              </div>

              {/* ── Body — full width, no empty left column ── */}
              <p className="text-sm leading-6 text-[#666] group-hover:text-[#888] transition-colors">
                {item.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.strengths.map((strength) => (
                  <span key={strength} className="skill-chip px-3 py-1 text-[10px] font-bold">
                    {strength}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
