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
    <footer className="border-t border-white/6 bg-[#0a0a0a]">
      <div className="mx-auto max-w-300 grid gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#a3e635]/30 font-mono-label text-[11px] font-bold text-[#a3e635]">
              BD
            </span>
            <p className="font-mono-label text-sm font-bold tracking-wide text-white">{name}</p>
          </div>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#a3e635] mb-4">
            IT Specialist · AI Workflows · EMR · IoT
          </p>
          <p className="text-sm leading-6 text-[#555]">
            Building production-grade systems that real organizations depend on — from hospital medical records and IoT monitoring platforms to AI-powered development workflows and full-stack web applications.
          </p>
          <div className="mt-5 flex items-center gap-2 font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#a3e635]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a3e635]" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
            Available Now
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#666] mb-5">Navigate</p>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-mono-label text-xs uppercase tracking-[0.14em] text-[#555] transition hover:text-[#a3e635]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#666] mb-5">Connect</p>
          <div className="space-y-3">
            <p>
              <a href="mailto:borisdairo123@gmail.com" className="text-sm text-[#555] transition hover:text-[#a3e635] break-all">
                borisdairo123@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:09382180531" className="text-sm text-[#555] transition hover:text-[#a3e635]">
                +63 938 218 0531
              </a>
            </p>
            <p className="text-sm text-[#666]">Tagum City, Philippines</p>
          </div>
          <div className="mt-5 flex gap-2">
            <button
              type="button"
              onClick={onOpenCv}
              className="rounded-xl border border-white/8 px-4 py-2 font-mono-label text-[11px] uppercase tracking-[0.14em] text-[#555] transition hover:border-white/20 hover:text-white"
            >
              View CV
            </button>
            <a
              href="mailto:borisdairo123@gmail.com?subject=Online%20Job%20Opportunity"
              className="primary-button rounded-xl bg-[#a3e635] px-4 py-2 font-mono-label text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a0a0a] transition hover:bg-[#84cc16]"
            >
              Hire Me →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-5 py-4 lg:px-8">
        <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-2 text-center sm:flex-row">
          <p className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-[#555]">
            © {new Date().getFullYear()} {name}
          </p>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-[#555]">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
