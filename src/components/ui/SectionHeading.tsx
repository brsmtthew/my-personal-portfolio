type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
}

function SectionHeading({ eyebrow, title, description, tone = 'dark' }: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
      <p
        className={`font-mono-label text-xs font-bold uppercase tracking-[0.24em] md:text-sm ${
          isDark ? 'text-[#00f2ea]' : 'text-teal-700'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-balance mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
          isDark ? 'text-[#d4e4fa]' : 'text-zinc-950'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${isDark ? 'text-[#b9cac8]' : 'text-zinc-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
