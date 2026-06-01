type FooterProps = {
  name: string
  onOpenCv: () => void
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Footer({ name, onOpenCv }: FooterProps) {
  return (
    <footer className="border-t border-white/8 bg-[#0d0c0b]">
      {/* Main content */}
      <div className="mx-auto max-w-300 grid gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_1fr] md:py-16 lg:px-8">

        {/* Col 1 — Identity + pitch */}
        <div>
          <p className="font-heading text-2xl font-bold text-[#f5f0e8]">{name}</p>
          <p className="mt-1 font-mono-label text-xs uppercase tracking-[0.2em] text-[#f59e0b]">
            IT Specialist · AI Workflows · EMR · IoT
          </p>
          <p className="mt-4 text-sm leading-7 text-[#7a6e62]">
            I build systems that real organizations depend on — from hospital medical records to live IoT monitoring dashboards. If you need reliable, production-ready technical work, let's talk.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-4 py-2 font-mono-label text-[10px] font-bold uppercase tracking-[0.14em] text-[#f59e0b]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
            />
            Available Now — Accepting Opportunities
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <p className="font-mono-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#7a6e62]">
            Navigate
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-[#c4b5a0] transition hover:text-[#f59e0b]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact + actions */}
        <div>
          <p className="font-mono-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#7a6e62]">
            Connect
          </p>
          <div className="mt-4 space-y-3 text-sm text-[#c4b5a0]">
            <p>
              <a href="mailto:borisdairo123@gmail.com" className="font-semibold hover:text-[#f59e0b]">
                borisdairo123@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:09382180531" className="font-semibold hover:text-[#f59e0b]">
                +63 938 218 0531
              </a>
            </p>
            <p className="text-[#7a6e62]">Tagum City, Philippines · All timezones</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onOpenCv}
              className="rounded-lg border border-white/10 px-4 py-2 font-mono-label text-xs font-bold text-[#c4b5a0] transition hover:border-[#f59e0b]/40 hover:text-[#f59e0b]"
            >
              View CV
            </button>
            <a
              href="mailto:borisdairo123@gmail.com?subject=Online%20Job%20Opportunity"
              className="rounded-lg bg-[#f59e0b] px-4 py-2 font-mono-label text-xs font-bold text-[#111010] transition hover:bg-[#fbbf24]"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6 px-5 py-5 lg:px-8">
        <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-3 text-center font-mono-label text-[11px] text-[#4a3f35] sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {name} · All rights reserved</p>
          <p>Built with React · TypeScript · Tailwind CSS · Playfair Display</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
