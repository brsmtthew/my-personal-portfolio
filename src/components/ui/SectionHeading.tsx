type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
      <p className="font-mono-label text-xs font-bold uppercase tracking-[0.24em] text-[#f59e0b] md:text-sm">
        {eyebrow}
      </p>
      <h2 className="text-balance mt-3 font-heading text-3xl font-bold leading-tight text-[#f5f0e8] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#7a6e62] sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
