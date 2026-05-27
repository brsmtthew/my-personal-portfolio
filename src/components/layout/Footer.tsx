type FooterProps = {
  name: string
  onOpenCv: () => void
}

function Footer({ name, onOpenCv }: FooterProps) {
  return (
    <footer className="border-t border-white/10 px-5 py-12 text-center text-sm text-[#849492] md:py-16">
      <div className="mx-auto grid max-w-300 gap-8 md:grid-cols-[1fr_1.2fr_1fr] md:text-left">
        <div>
          <p className="font-heading font-bold text-[#d4e4fa]">{name}</p>
          <p className="mt-2 text-sm leading-6 text-[#849492]">
            IT Specialist focused on EMR workflows, AI-assisted productivity, IoT systems,
            and practical technical support.
          </p>
        </div>
        <div className="font-mono-label text-xs leading-6">
          <p>(c) {new Date().getFullYear()} {name} Portfolio</p>
          <p>Built with React, TypeScript, and Tailwind CSS.</p>
          <p>Available for remote, freelance, and full-time technical roles.</p>
        </div>
        <div className="flex justify-center gap-6 font-mono-label text-xs text-[#d4e4fa] md:justify-end">
          <a href="mailto:borisdairo123@gmail.com" className="hover:text-[#00f2ea]">
            Email
          </a>
          <a href="tel:09382180531" className="hover:text-[#00f2ea]">
            Call
          </a>
          <button
            type="button"
            className="hover:text-[#00f2ea]"
            onClick={onOpenCv}
          >
            View CV
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
