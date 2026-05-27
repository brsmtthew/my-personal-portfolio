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
                  <p className="rounded bg-[#00f2ea]/10 px-3 py-1 font-mono-label text-xs font-bold text-[#00f2ea]">
                    {item.period}
                  </p>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#d4e4fa]">{item.school}</h3>
                <p className="mt-3 text-sm leading-6 text-[#b9cac8]">{item.degree}</p>
                <p className="mt-5 text-sm leading-6 text-[#849492]">{item.summary}</p>
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
          <aside className="glass-card p-6 text-white shadow-sm">
            <p className="font-mono-label text-sm font-semibold uppercase tracking-[0.2em] text-[#849492]">
              Communication
            </p>
            <div className="mt-6 flex flex-wrap gap-3 lg:flex-col">
              {languages.map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 font-mono-label text-sm text-[#d4e4fa] transition hover:-translate-y-0.5 hover:border-[#00f2ea] hover:bg-[#00f2ea]/10 hover:text-[#00f2ea]"
                >
                  {language}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-[#b9cac8]">
              Comfortable communicating in daily support, documentation, and client coordination.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Education
