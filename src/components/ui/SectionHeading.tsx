type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <div data-reveal className="flex items-center gap-4 mb-6">
        <span className="font-mono-label text-[11px] font-bold uppercase tracking-[0.28em] text-[#a3e635]">
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-white/8" />
      </div>
      <h2
        data-reveal
        data-reveal-delay="1"
        className="text-balance font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {description ? (
        <p
          data-reveal
          data-reveal-delay="2"
          className="mt-4 max-w-2xl text-base leading-7 text-[#666] sm:text-lg"
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
