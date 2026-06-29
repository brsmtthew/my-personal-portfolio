import { useMemo, useState } from 'react'
import { FiAward, FiExternalLink, FiFileText, FiX, FiZoomIn } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import type { Certificate } from '../../data/portfolio'

type CertificatesProps = {
  certificates: Certificate[]
}

function Certificates({ certificates }: CertificatesProps) {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(certificates.map((c) => c.category)))],
    [certificates],
  )
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [lightbox, setLightbox] = useState<Certificate | null>(null)

  const visible =
    activeCategory === 'All'
      ? certificates
      : certificates.filter((c) => c.category === activeCategory)

  return (
    <section id="certificates" className="section-glow px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <SectionHeading
          eyebrow="Certificates"
          title="Training, seminars, and credentials earned along the way."
          description={`${certificates.length} certificates spanning development, design, and professional readiness — click any to view it full size.`}
        />

        {/* Category filters */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full border px-4 py-2 font-mono-label text-[11px] uppercase tracking-[0.18em] transition ${
                  isActive
                    ? 'border-[#a3e635] bg-[#a3e635] text-[#0a0a0a]'
                    : 'border-white/8 text-[#666] hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Certificate grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((cert, index) => {
            const previewClass =
              'relative block aspect-[4/3] w-full overflow-hidden bg-[#111] text-left'
            const categoryBadge = (
              <span className="absolute left-3 top-3 rounded-full border border-[#a3e635]/30 bg-[#0a0a0a]/85 px-2.5 py-1 font-mono-label text-[10px] uppercase tracking-[0.16em] text-[#a3e635] backdrop-blur">
                {cert.category}
              </span>
            )

            return (
              <article
                key={`${cert.title}-${index}`}
                data-reveal
                data-reveal-delay={(((index % 4) + 1).toString()) as '1' | '2' | '3' | '4'}
                className="glass-card card-hover group flex flex-col overflow-hidden"
              >
                {/* Preview */}
                {cert.image ? (
                  <button
                    type="button"
                    onClick={() => setLightbox(cert)}
                    className={previewClass}
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                      <span className="flex items-center gap-2 rounded-full border border-[#a3e635] bg-[#0a0a0a]/80 px-4 py-2 font-mono-label text-[11px] uppercase tracking-[0.16em] text-[#a3e635]">
                        <FiZoomIn className="h-4 w-4" />
                        View
                      </span>
                    </div>
                    {categoryBadge}
                  </button>
                ) : (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className={previewClass}
                    aria-label={`Open ${cert.title} PDF`}
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-[#161616] to-[#0d0d0d]">
                      <FiFileText className="h-10 w-10 text-[#a3e635]/40" />
                      <span className="flex items-center gap-1.5 font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#666] transition group-hover:text-[#a3e635]">
                        <FiExternalLink className="h-3.5 w-3.5" />
                        Open PDF
                      </span>
                    </div>
                    {categoryBadge}
                  </a>
                )}

                {/* Meta */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-base font-bold leading-snug text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-2 flex items-start gap-1.5 text-xs leading-5 text-[#777]">
                    <FiAward className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#a3e635]/60" />
                    {cert.issuer}
                  </p>
                  <p className="mt-auto pt-4 font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#555]">
                    {cert.date}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox?.image && (
        <div className="fixed inset-0 z-80 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl">
          <div className="glass-card w-full max-w-5xl overflow-hidden">
            <div className="flex items-center justify-between gap-4 border-b border-white/8 p-4">
              <div className="min-w-0">
                <p className="truncate font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#a3e635]">
                  {lightbox.category} · {lightbox.date}
                </p>
                <h3 className="mt-1 truncate font-heading text-lg font-bold text-white">
                  {lightbox.title}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {lightbox.file && (
                  <a
                    href={lightbox.file}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 text-[#666] transition hover:border-[#a3e635]/40 hover:text-[#a3e635]"
                    aria-label="Open original file"
                  >
                    <FiExternalLink className="h-4 w-4" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 text-[#666] transition hover:border-white/20 hover:text-white"
                  aria-label="Close"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="p-3 sm:p-5">
              <img
                src={lightbox.image}
                alt={`${lightbox.title} certificate`}
                className="max-h-[72vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
