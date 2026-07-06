type FooterProps = {
  name: string
  onOpenCv: () => void
  languages: string[]
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/brsmtthew',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/brswadeson',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/brswadeson',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/brswadeson?s=11',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@brswadeson',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/639382180531',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/brswadeson',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: 'Viber',
    href: 'viber://chat?number=%2B639382180531',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M11.4 0C6.55.08 2.1 2.37.55 6.85-.5 9.73-.17 13.3 1.5 15.84c1.53 2.3 4.1 3.89 6.91 4.3v2.38a.5.5 0 00.83.37l2.53-2.53c.54.04 1.08.04 1.63.04 4.88-.08 9.33-2.37 10.88-6.85 1.55-4.48-.2-10.05-4.63-12.14A12.45 12.45 0 0011.4 0zm.18 1.5c1.3-.02 2.6.23 3.82.72 3.73 1.65 5.19 6.38 3.9 10.22-1.3 3.84-5.15 5.82-9.42 5.87-.56 0-1.12-.03-1.68-.08a.5.5 0 00-.36.13l-1.77 1.77v-1.67a.5.5 0 00-.42-.49c-2.56-.35-4.93-1.74-6.3-3.83-1.47-2.2-1.75-5.37-.84-7.88C1.6 3.23 5.46 1.6 9.43 1.51h2.15zm-.5 2.99c-.7.02-1.35.39-1.79.93-.44.55-.63 1.26-.5 1.95.14.73.6 1.37 1.23 1.77.62.4 1.38.53 2.1.38.72-.15 1.35-.58 1.74-1.19.4-.61.53-1.36.37-2.06-.14-.65-.54-1.22-1.1-1.59a2.7 2.7 0 00-2.05-.19zm.04 1a1.7 1.7 0 011.28.12c.35.22.6.58.69 1 .09.4.02.82-.2 1.16-.21.35-.55.6-.94.69-.39.1-.8.03-1.14-.2a1.71 1.71 0 01-.69-1.06 1.7 1.7 0 01.27-1.33c.19-.24.44-.38.73-.38zM7.5 8.5a.5.5 0 00-.5.5v.5c0 2.76 2.24 5 5 5h.5a.5.5 0 00.5-.5v-.5a.5.5 0 00-.5-.5H12c-2.21 0-4-1.79-4-4v-.5a.5.5 0 00-.5-.5z" />
      </svg>
    ),
  },
  {
    label: 'Discord',
    href: 'https://discord.com/users/Boris_30#0406',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    label: 'MS Teams',
    href: 'https://teams.microsoft.com/l/chat/0/0?users=borisdairo123@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M20.625 7.875a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25zM14.25 8.25a3 3 0 100-6 3 3 0 000 6zM20.625 9a3.75 3.75 0 00-2.603 1.053A5.977 5.977 0 0120.25 14.25v.375c0 .138-.01.274-.023.408H22.5a1.5 1.5 0 001.5-1.5v-.783A3.75 3.75 0 0020.625 9zM14.25 9.75A4.5 4.5 0 019.75 14.25v.375A4.5 4.5 0 009.75 19.5h9a4.5 4.5 0 004.5-4.5v-.375a4.5 4.5 0 00-4.5-4.5H14.25zM6 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM3.75 12.75A3.75 3.75 0 000 16.5v.375A1.5 1.5 0 001.5 18.375h5.604A5.977 5.977 0 017.5 14.25v-.375c0-.731.133-1.432.374-2.079A3.73 3.73 0 006 11.25a3.75 3.75 0 00-2.25.75v.75z" />
      </svg>
    ),
  },
]

const JOB_SITE_LINKS = [
  {
    label: 'Upwork',
    href: 'https://upwork.com/freelancers/borisdairo',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn Jobs',
    href: 'https://www.linkedin.com/in/boris-matthew-dairo-b304442b2/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'JobStreet',
    href: 'https://jobstreet.com.ph/profile/borisdairo',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M20 6h-2.18c.07-.44.18-.86.18-1.3C18 2.1 15.9 0 13.3 0c-1.5 0-2.8.7-3.7 1.8L12 4.6l1.6-1.6c.3-.3.7-.5 1.1-.5.9 0 1.6.7 1.6 1.6 0 .4-.1.8-.4 1.1L12 9l-6.4-6.4A2.34 2.34 0 004 2.3c-1.3 0-2.3 1-2.3 2.3 0 .6.2 1.1.6 1.5L9 12.8V20c0 2.2 1.8 4 4 4s4-1.8 4-4v-7.2l3.4-3.4c.4-.4.6-.9.6-1.4 0-1.1-.9-2-2-2zM11 20c0 1.1-.9 2-2 2s-2-.9-2-2v-8.2l2 2V20zm2-7.2l-3-3-6-6a.3.3 0 010-.42.3.3 0 01.42 0L10 9l4.58-4.58a.5.5 0 01.84.36.5.5 0 01-.15.36L11 9.72V12.8z" />
      </svg>
    ),
  },
  {
    label: 'Indeed',
    href: 'https://ph.indeed.com/resume/borisdairo',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm0 4.8a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8zm3.6 14.4H8.4v-1.2h1.2V12H8.4v-1.2h4.8V18h1.2v1.2z" />
      </svg>
    ),
  },
]

function Footer({ name, onOpenCv, languages }: FooterProps) {
  return (
    <footer className="border-t border-white/6 bg-[#0a0a0a]">
      <div className="mx-auto max-w-300 grid gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.75fr_0.85fr_1fr] lg:px-8">
        {/* Brand */}
        <div className="min-w-0 overflow-hidden">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#a3e635]/30 font-mono-label text-[10px] font-bold text-[#a3e635]">
              BD
            </span>
            <p className="font-mono-label text-sm font-bold tracking-wide text-white">{name}</p>
          </div>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#a3e635] mb-2">
            IT Specialist · AI Workflows · EMR · IoT
          </p>
          <p className="text-xs leading-5 text-[#555]">
            Building production-grade systems that real organizations depend on — from hospital medical records and IoT monitoring platforms to AI-powered development workflows and full-stack web applications.
          </p>
          <div className="mt-3 flex items-center gap-2 font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#a3e635]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a3e635]" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
            Available Now
          </div>

          {/* Social & Messaging */}
          <p className="mt-3 mb-1 font-mono-label text-[9px] uppercase tracking-[0.2em] text-[#3a3a3a]">Social & Messaging</p>
          <div className="flex items-center gap-1 overflow-x-auto pb-0.5 footer-icon-row">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="footer-social-icon shrink-0"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Job Sites */}
          <p className="mt-2 mb-1 font-mono-label text-[9px] uppercase tracking-[0.2em] text-[#3a3a3a]">Find Me On</p>
          <div className="flex items-center gap-1 overflow-x-auto pb-0.5 footer-icon-row">
            {JOB_SITE_LINKS.map((site) => (
              <a
                key={site.label}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={site.label}
                title={site.label}
                className="footer-social-icon footer-job-icon shrink-0"
              >
                {site.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#a3e635] mb-3">Navigate</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-mono-label text-xs uppercase tracking-[0.14em] text-[#555] transition hover:text-[#a3e635]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#a3e635] mb-3">Languages</p>
          <ul className="space-y-2">
            {languages.map((lang) => (
              <li key={lang} className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-white">{lang}</span>
                <span className="font-mono-label text-[10px] uppercase tracking-wider text-[#a3e635]">Fluent</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-5 text-[#555]">
            Comfortable in daily support, documentation, and client coordination.
          </p>
        </div>

        {/* Contact */}
        <div>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#a3e635] mb-3">Connect</p>
          <div className="space-y-2">
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
          <div className="mt-3 flex gap-2">
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
      <div className="border-t border-white/5 px-5 py-3 lg:px-8">
        <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-2 text-center sm:flex-row">
          <p className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-[#555]">
            © {new Date().getFullYear()} {name}
          </p>
          {/* Social icons in bottom bar */}
          <div className="flex items-center justify-center gap-1 overflow-x-auto footer-icon-row">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="footer-social-icon-sm"
              >
                {social.icon}
              </a>
            ))}
            <span className="mx-1 h-3 w-px bg-white/10" />
            {JOB_SITE_LINKS.map((site) => (
              <a
                key={site.label}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={site.label}
                title={site.label}
                className="footer-social-icon-sm footer-job-icon-sm"
              >
                {site.icon}
              </a>
            ))}
          </div>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-[#555]">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
