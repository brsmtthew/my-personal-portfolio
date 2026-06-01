import SectionHeading from '../ui/SectionHeading'
import type { Education as EducationItem } from '../../data/portfolio'

type EducationProps = {
  education: EducationItem[]
  languages: string[]
}

function Education({ education, languages }: EducationProps) {
  return (
    <section id="education" className="px-5 py-16 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <SectionHeading
          eyebrow="Education"
          title="Academic background and communication strengths."
          description="A quick snapshot of the academic foundation and languages behind the technical work."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <article key={item.school} className="glass-card card-hover flex min-h-76 flex-col p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="rounded bg-[#f59e0b]/12 px-3 py-1 font-mono-label text-xs font-bold text-[#f59e0b]">
                    {item.period}
                  </p>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#f5f0e8]">{item.school}</h3>
                <p className="mt-3 text-sm leading-6 text-[#c4b5a0]">{item.degree}</p>
                <p className="mt-5 text-sm leading-6 text-[#7a6e62]">{item.summary}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {item.strengths.map((strength) => (
                    <span key={strength} className="skill-chip px-3 py-1 text-[10px] font-bold">
                      {strength}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <aside className="glass-card p-6">
            <p className="font-mono-label text-sm font-semibold uppercase tracking-[0.2em] text-[#7a6e62]">
              Communication
            </p>
            <div className="mt-6 flex flex-wrap gap-3 lg:flex-col">
              {languages.map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-white/8 bg-white/5 px-4 py-2 font-mono-label text-sm text-[#c4b5a0] transition hover:-translate-y-0.5 hover:border-[#f59e0b]/40 hover:bg-[#f59e0b]/8 hover:text-[#f59e0b]"
                >
                  {language}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-[#7a6e62]">
              Comfortable communicating in daily support, documentation, and client coordination.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Education
