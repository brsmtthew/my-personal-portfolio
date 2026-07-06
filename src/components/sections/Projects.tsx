import { useMemo, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiImage, FiX, FiExternalLink } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import type { Project } from '../../data/portfolio'

type ProjectsProps = {
  projects: Project[]
}

type LightboxState = {
  currentIndex: number
  images: string[]
  title: string
}

function Projects({ projects }: ProjectsProps) {
  const galleryRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects],
  )
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const visibleProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  function getImages(project: Project) {
    return [project.imageUrl, ...(project.gallery ?? [])].filter((i): i is string => Boolean(i))
  }

  function openLightbox(project: Project, currentIndex = 0) {
    const images = getImages(project)
    if (images.length) setLightbox({ currentIndex, images, title: project.title })
  }

  function stepLightbox(dir: 1 | -1) {
    setLightbox((cur) => {
      if (!cur) return cur
      return { ...cur, currentIndex: (cur.currentIndex + dir + cur.images.length) % cur.images.length }
    })
  }

  function scrollGallery(title: string, dir: 1 | -1) {
    galleryRefs.current[title]?.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  return (
    <section id="work" className="section-glow px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <SectionHeading
          eyebrow="Projects"
          title="Focused work examples with practical business and technical value."
          description="Real systems built for medical records, IoT safety monitoring, online booking, and operational workflows."
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

        {/* Projects — floating glass cards alternating image side */}
        <div className="flex flex-col gap-5">
          {visibleProjects.map((project, index) => {
            const images = getImages(project)
            const isEven = index % 2 === 0

            return (
              <article
                key={project.title}
                data-reveal
                className="glass-card card-hover grid overflow-hidden lg:grid-cols-2"
              >
                {/* Image side */}
                <div className={`relative overflow-hidden ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                  {project.imageUrl ? (
                    <button
                      type="button"
                      onClick={() => openLightbox(project, 0)}
                      className="group relative block h-full w-full text-left"
                      aria-label={`View ${project.title} images`}
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt ?? `${project.title} preview`}
                        className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02] sm:h-64 lg:h-full lg:min-h-72"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100 flex items-center justify-center">
                        <span className="flex items-center gap-2 rounded-full border border-[#a3e635] bg-[#0a0a0a]/80 px-4 py-2 font-mono-label text-[11px] uppercase tracking-[0.16em] text-[#a3e635]">
                          <FiImage className="h-4 w-4" />
                          View {images.length} image{images.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </button>
                  ) : (
                    <div className="flex h-56 items-center justify-center bg-[#111] sm:h-64 lg:h-full lg:min-h-72">
                      <span className="font-heading text-5xl font-black text-[#a3e635]/10">
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}

                  {/* Type badge */}
                  <span className="absolute left-4 top-4 rounded-full border border-[#a3e635]/30 bg-[#0a0a0a]/85 px-2.5 py-1 font-mono-label text-[10px] uppercase tracking-[0.16em] text-[#a3e635] backdrop-blur">
                    {project.type}
                  </span>
                </div>

                {/* Content side */}
                <div className="flex flex-col gap-5 p-6 lg:p-8">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        {project.logoUrl && (
                          <img
                            src={project.logoUrl}
                            alt={`${project.title} logo`}
                            className="h-9 w-9 rounded-lg border border-white/8 bg-white object-cover"
                          />
                        )}
                        <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#666]">
                          {project.category}
                        </p>
                      </div>
                      <span className="font-mono-label text-[10px] text-[#555]">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#666]">{project.description}</p>

                    {/* Impact */}
                    <div className="shine-panel surface-panel mt-4 border-l-2 border-[#a3e635]/40 p-4">
                      <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#a3e635] mb-1">Impact</p>
                      <p className="text-sm leading-6 text-[#888] italic">{project.impact}</p>
                    </div>
                  </div>

                  {/* Stack */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span key={tech} className="skill-chip px-2.5 py-1 text-[10px] font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Thumbnail strip */}
                    {project.gallery && project.gallery.length > 0 && (
                      <div className="border-t border-white/6 pt-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#666]">
                            Screenshots
                          </p>
                          <div className="flex gap-1">
                            <button
                              type="button"
                              onClick={() => scrollGallery(project.title, -1)}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/8 text-[#555] transition hover:border-[#a3e635]/30 hover:text-[#a3e635]"
                              aria-label="Scroll backward"
                            >
                              <FiChevronLeft className="h-3.5 w-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => scrollGallery(project.title, 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/8 text-[#555] transition hover:border-[#a3e635]/30 hover:text-[#a3e635]"
                              aria-label="Scroll forward"
                            >
                              <FiChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                        <div
                          ref={(el) => { galleryRefs.current[project.title] = el }}
                          className="flex gap-2 overflow-x-auto scroll-smooth"
                        >
                          {project.gallery.map((url, gi) => (
                            <button
                              key={url}
                              type="button"
                              onClick={() => openLightbox(project, gi + 1)}
                              className="shrink-0 opacity-50 transition hover:opacity-100"
                            >
                              <img
                                src={url}
                                alt={`${project.title} screenshot ${gi + 1}`}
                                className="h-12 w-20 object-cover object-top sm:h-14 sm:w-24"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Project Links */}
                    {project.links && project.links.length > 0 && (
                      <div className={`flex flex-wrap gap-2 ${
                        project.gallery && project.gallery.length > 0
                          ? 'mt-3'
                          : 'mt-4 border-t border-white/6 pt-4'
                      }`}>
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 font-mono-label text-[11px] uppercase tracking-[0.14em] transition primary-button bg-[#a3e635] font-bold text-[#0a0a0a] hover:bg-[#84cc16]"
                          >
                            <FiExternalLink className="h-3.5 w-3.5" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>

            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-80 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl">
          <div className="glass-card w-full max-w-6xl overflow-hidden">
            <div className="flex items-center justify-between gap-4 border-b border-white/8 p-4">
              <div>
                <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#a3e635]">
                  {lightbox.currentIndex + 1} / {lightbox.images.length}
                </p>
                <h3 className="mt-1 font-heading text-lg font-bold text-white">{lightbox.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 text-[#666] transition hover:border-white/20 hover:text-white"
                aria-label="Close"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            <div className="relative p-3 sm:p-5">
              <img
                src={lightbox.images[lightbox.currentIndex]}
                alt={`${lightbox.title} screenshot ${lightbox.currentIndex + 1}`}
                className="max-h-[72vh] w-full object-contain"
              />
              {lightbox.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => stepLightbox(-1)}
                    className="absolute left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/8 bg-[#111]/90 text-[#888] backdrop-blur transition hover:border-[#a3e635]/40 hover:text-[#a3e635]"
                    aria-label="Previous"
                  >
                    <FiChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepLightbox(1)}
                    className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/8 bg-[#111]/90 text-[#888] backdrop-blur transition hover:border-[#a3e635]/40 hover:text-[#a3e635]"
                    aria-label="Next"
                  >
                    <FiChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
