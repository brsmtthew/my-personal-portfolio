import type { IconType } from 'react-icons'
import { FiBriefcase, FiCheckCircle, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import type { Profile } from '../../data/portfolio'

type ContactProps = {
  onOpenCv: () => void
  profile: Profile
}

function Contact({ onOpenCv, profile }: ContactProps) {
  const contactMethods: Array<{
    label: string
    value: string
    href?: string
    icon: IconType
  }> = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
    { label: 'Direct Line', value: profile.phone, href: `tel:${profile.phone}`, icon: FiPhone },
    { label: 'Location', value: profile.location, icon: FiMapPin },
    { label: 'Availability', value: profile.availability, icon: FiCheckCircle },
    {
      label: 'Work Focus',
      value: 'EMR, IT Support, AI Workflows, IoT, Web Systems',
      icon: FiBriefcase,
    },
  ]

  return (
    <section id="contact" className="px-5 py-16 md:py-28 lg:px-8">
      <div className="glass-card mx-auto max-w-300 p-6 text-white sm:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Ready for online job opportunities and client projects."
          description="Reach out for IT Support, EMR workflows, AI-assisted productivity, IoT development, web systems, or technical operations work."
          tone="dark"
        />
        <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
          <div className="surface-panel p-6">
            <h3 className="font-heading text-xl font-bold text-[#d4e4fa]">Let us connect</h3>
            <div className="mt-5 space-y-5 text-sm text-[#b9cac8]">
              {contactMethods.map((method) => {
                const Icon = method.icon
                const valueClassName = 'font-bold text-[#d4e4fa] hover:text-[#00f2ea]'

                return (
                  <p key={method.label} className="group flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00f2ea]/10 text-[#00f2ea] transition group-hover:bg-[#00f2ea]/20 group-hover:shadow-[0_0_18px_rgba(0,242,234,0.18)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono-label text-[10px] uppercase tracking-[0.14em] text-[#849492]">
                        {method.label}
                      </span>
                      {method.href ? (
                        <a href={method.href} className={valueClassName}>
                          {method.value}
                        </a>
                      ) : (
                        <span className="font-bold text-[#d4e4fa]">{method.value}</span>
                      )}
                    </span>
                  </p>
                )
              })}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="surface-panel p-6 text-white">
              <p className="font-mono-label text-sm font-semibold uppercase tracking-[0.2em] text-[#00f2ea]">
                Profiles
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {profile.socials.map((social) =>
                  social.href.endsWith('.pdf') ? (
                    <button
                      key={social.label}
                      type="button"
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-bold hover:border-[#00f2ea]/50 hover:bg-white/10 hover:text-[#00f2ea]"
                      onClick={onOpenCv}
                    >
                      {social.label}
                    </button>
                  ) : (
                    <a
                      key={social.label}
                      href={social.href}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold hover:border-[#00f2ea]/50 hover:bg-white/10 hover:text-[#00f2ea]"
                    >
                      {social.label}
                    </a>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-lg bg-[#00f2ea] p-6 text-[#051424]">
              <h3 className="font-heading text-2xl font-bold">Start a Technical Discussion</h3>
              <p className="mt-3 text-sm leading-6 text-[#003735]">
                Looking for IT Support, EMR workflow help, AI-assisted productivity, IoT development,
                or web systems? Let us talk about your roadmap.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-5 inline-flex w-full justify-center rounded-lg bg-[#051424] px-5 py-3 text-sm font-bold text-[#00f2ea]"
              >
                Initialize Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
