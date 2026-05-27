import SectionHeading from '../ui/SectionHeading'
import type { Experience as ExperienceItem } from '../../data/portfolio'

type ExperienceProps = {
  experiences: ExperienceItem[]
}

function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="border-y border-white/10 bg-white/3 px-5 py-16 md:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Real work experience in medical records, technical support, and creative operations."
          description="A direct timeline showing Electronic Medical Records support, accurate data handling, practical troubleshooting, and daily technical operations."
        />
        <div className="relative ml-3 space-y-6 md:ml-0">
          <div className="absolute bottom-0 left-0 top-2 w-px bg-white/10 md:hidden" />
          {experiences.map((item, index) => (
            <article key={`${item.role}-${item.company}`} className="glass-card card-hover relative p-6 md:p-8">
              <span className="absolute -left-3.75 top-8 h-3 w-3 rounded-full border border-[#051424] bg-[#00f2ea] shadow-[0_0_10px_rgba(0,242,234,0.8)] md:hidden" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono-label text-[10px] uppercase tracking-[0.14em] text-[#00f2ea]/70">
                    Milestone {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-[#d4e4fa]">{item.role}</h3>
                  <p className="mt-1 text-sm font-bold text-[#00f2ea]">{item.company}</p>
                </div>
                <p className="rounded-full bg-white/5 px-3 py-1 font-mono-label text-[10px] uppercase text-[#b9cac8]">{item.period}</p>
              </div>
              <ul className="mt-5 space-y-3">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-6 text-[#b9cac8]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full border border-[#00f2ea] shadow-[0_0_10px_rgba(0,242,234,0.7)]" />
                    <span>{detail}</span>
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
