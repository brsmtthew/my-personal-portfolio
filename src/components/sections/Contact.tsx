import { useState } from 'react'
import type { IconType } from 'react-icons'
import { FiBriefcase, FiCheckCircle, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import type { Profile } from '../../data/portfolio'

type ContactProps = {
  onOpenCv: () => void
  profile: Profile
}

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

function Contact({ onOpenCv, profile }: ContactProps) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Required'
    if (!form.email.trim()) newErrors.email = 'Required'
    if (!form.subject.trim()) newErrors.subject = 'Required'
    if (!form.message.trim()) newErrors.message = 'Required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    window.open(mailto)
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setErrors({})
  }

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-lg border bg-[#051424]/60 px-4 py-2.5 text-sm text-[#d4e4fa] placeholder-[#4a6a66] outline-none transition focus:border-[#00f2ea]/60 focus:ring-1 focus:ring-[#00f2ea]/30 ${
      errors[field] ? 'border-red-500/60' : 'border-white/10'
    }`

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

            <div className="surface-panel p-6">
              <h3 className="font-heading text-lg font-bold text-[#d4e4fa]">Start a Technical Discussion</h3>
              {submitted ? (
                <div className="mt-5 flex flex-col items-center gap-3 py-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00f2ea]/15 text-[#00f2ea]">
                    <FiCheckCircle className="h-6 w-6" />
                  </span>
                  <p className="font-heading font-semibold text-[#d4e4fa]">Email client opened!</p>
                  <p className="text-sm text-[#849492]">Your message was prepared. Send it from your email app.</p>
                  <button
                    type="button"
                    className="mt-2 text-xs text-[#00f2ea] underline underline-offset-2"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-4 grid gap-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass('name')}
                        aria-label="Your name"
                      />
                      {errors.name && <p className="mt-1 text-[10px] text-red-400">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className={inputClass('email')}
                        aria-label="Your email"
                      />
                      {errors.email && <p className="mt-1 text-[10px] text-red-400">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject (e.g. Job Opportunity, Project Inquiry)"
                      className={inputClass('subject')}
                      aria-label="Subject"
                    />
                    {errors.subject && <p className="mt-1 text-[10px] text-red-400">{errors.subject}</p>}
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={4}
                      className={`${inputClass('message')} resize-none`}
                      aria-label="Message"
                    />
                    {errors.message && <p className="mt-1 text-[10px] text-red-400">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00f2ea] px-5 py-3 text-sm font-bold text-[#051424] transition hover:bg-[#7ffff8]"
                  >
                    <FiSend className="h-4 w-4" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
