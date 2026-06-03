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

  const contactMethods: Array<{ label: string; value: string; href?: string; icon: IconType }> = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, icon: FiPhone },
    { label: 'Location', value: profile.location, icon: FiMapPin },
    { label: 'Status', value: profile.availability, icon: FiCheckCircle },
    { label: 'Focus', value: 'EMR, IT Support, AI Workflows, IoT, Web Systems', icon: FiBriefcase },
  ]

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name as keyof FormState]) setErrors((p) => ({ ...p, [name]: undefined }))
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Required'
    if (!form.email.trim()) newErrors.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email'
    if (!form.subject.trim()) newErrors.subject = 'Required'
    if (!form.message.trim()) newErrors.message = 'Required'
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.open(`mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`)
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setErrors({})
  }

  const input = (field: keyof FormState) =>
    `glass-input px-4 py-3 ${errors[field] ? 'input-error' : ''}`

  return (
    <section id="contact" className="section-glow bg-[#0f0f0f] px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <SectionHeading
          eyebrow="Contact"
          title="Ready for online job opportunities and client projects."
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — info */}
          <div data-reveal className="glass-card p-6 lg:p-8">
            {/* Big email CTA */}
            <a
              href={`mailto:${profile.email}`}
              className="group mb-8 block text-[#a3e635] transition hover:text-white"
            >
              <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#666] mb-2">Email</p>
              <p className="break-all font-heading text-xl font-bold underline underline-offset-4 decoration-[#a3e635]/30 group-hover:decoration-white sm:text-2xl">
                {profile.email}
              </p>
            </a>

            {/* Contact rows */}
            <div className="space-y-5 divide-y divide-white/5">
              {contactMethods.slice(1).map((method) => {
                const Icon = method.icon
                return (
                  <div key={method.label} className="flex items-start gap-4 pt-5 first:pt-0">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center surface-panel text-[#a3e635]">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#666]">{method.label}</p>
                      {method.href ? (
                        <a href={method.href} className="mt-1 block text-sm text-[#888] transition hover:text-white">
                          {method.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-[#888]">{method.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social links */}
            <div className="mt-8 border-t border-white/6 pt-6">
              <p className="mb-4 font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#666]">Profiles</p>
              <div className="grid grid-cols-2 gap-2">
                {profile.socials.map((social) =>
                  social.href.endsWith('.pdf') ? (
                    <button
                      key={social.label}
                      type="button"
                      onClick={onOpenCv}
                      className="rounded-xl border border-white/8 px-3 py-2.5 text-left font-mono-label text-[11px] uppercase tracking-[0.12em] text-[#666] transition hover:border-[#a3e635]/30 hover:text-[#a3e635]"
                    >
                      {social.label}
                    </button>
                  ) : (
                    <a
                      key={social.label}
                      href={social.href}
                      className="rounded-xl border border-white/8 px-3 py-2.5 font-mono-label text-[11px] uppercase tracking-[0.12em] text-[#666] transition hover:border-[#a3e635]/30 hover:text-[#a3e635]"
                    >
                      {social.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div data-reveal data-reveal-delay="1" className="glass-card p-6 lg:p-8">
            <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#666] mb-6">
              Send a Message
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <FiCheckCircle className="h-8 w-8 text-[#a3e635]" />
                <p className="font-heading text-lg font-bold text-white">Message prepared</p>
                <p className="text-sm text-[#666]">Your email client has been opened with the message.</p>
                <button
                  type="button"
                  className="mt-2 font-mono-label text-[11px] uppercase tracking-[0.16em] text-[#a3e635] underline underline-offset-4"
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={input('name')}
                      aria-label="Your name"
                    />
                    {errors.name && <p className="mt-1 font-mono-label text-[10px] text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className={input('email')}
                      aria-label="Your email"
                    />
                    {errors.email && <p className="mt-1 font-mono-label text-[10px] text-red-400">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={input('subject')}
                    aria-label="Subject"
                  />
                  {errors.subject && <p className="mt-1 font-mono-label text-[10px] text-red-400">{errors.subject}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className={`${input('message')} resize-none`}
                    aria-label="Message"
                  />
                  {errors.message && <p className="mt-1 font-mono-label text-[10px] text-red-400">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="primary-button flex w-full items-center justify-center gap-2 rounded-2xl bg-[#a3e635] px-6 py-3.5 font-mono-label text-sm font-bold uppercase tracking-[0.14em] text-[#0a0a0a] transition hover:bg-[#84cc16]"
                >
                  <FiSend className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
