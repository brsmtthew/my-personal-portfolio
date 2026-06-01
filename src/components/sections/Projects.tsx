import { useMemo, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiImage, FiX } from 'react-icons/fi'
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
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects],
  )
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)
  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  function getProjectImages(project: Project) {
    return [project.imageUrl, ...(project.gallery ?? [])].filter((image): image is string =>
      Boolean(image),
    )
  }

  function openProjectImages(project: Project, currentIndex = 0) {
    const images = getProjectImages(project)
    if (images.length) {
      setLightbox({ currentIndex, images, title: project.title })
    }
  }

  function stepLightbox(direction: 1 | -1) {
    setLightbox((current) => {
      if (!current) return current
      return {
        ...current,
        currentIndex:
          (current.currentIndex + direction + current.images.length) % current.images.length,
      }
    })
  }

  function scrollProjectGallery(projectTitle: string, direction: 1 | -1) {
    galleryRefs.current[projectTitle]?.scrollBy({ left: direction * 260, behavior: 'smooth' })
  }

  return (
    <section id="work" className="px-5 py-16 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <SectionHeading
          eyebrow="Projects"
          title="Focused work examples with practical business and technical value."
          description="Filter by area to review client-relevant experience in Medical Systems, AI Workflows, IT Support, IoT, and Creative Technical Operations."
        />

        {/* Category filters */}
        <div className="-mx-5 mb-8 flex gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:justify-center md:px-0">
          {categories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                type="button"
                className={`shrink-0 rounded-full border px-4 py-2 font-mono-label text-xs font-bold transition ${
                  isActive
                    ? 'border-[#f59e0b] bg-[#f59e0b] text-[#111010] shadow-[0_0_18px_rgba(245,158,11,0.25)]'
                    : 'border-white/8 bg-white/4 text-[#7a6e62] hover:border-[#f59e0b]/35 hover:bg-[#f59e0b]/8 hover:text-[#f59e0b]'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project, index) => {
            const projectImages = getProjectImages(project)
            return (
              <article key={project.title} className="glass-card card-hover flex overflow-hidden p-0">
                <div className="flex flex-1 flex-col">
                  {project.imageUrl ? (
                    <div className="relative border-b border-white/6 bg-[#0d0c0b]">
                      <button
                        type="button"
                        className="block w-full text-left"
                        onClick={() => openProjectImages(project, 0)}
                        aria-label={`View ${project.title} screenshots`}
                      >
                        <img
                          src={project.imageUrl}
                          alt={project.imageAlt ?? `${project.title} project preview`}
                          className="h-40 w-full object-cover object-top opacity-90 transition duration-300 hover:opacity-100 hover:scale-[1.01] sm:h-48"
                        />
                      </button>
                      <span className="absolute left-4 top-4 rounded-full border border-[#f59e0b]/25 bg-[#111010]/90 px-3 py-1 font-mono-label text-[10px] font-bold uppercase tracking-[0.14em] text-[#f59e0b] backdrop-blur">
                        Project Preview
                      </span>
                      {projectImages.length > 1 ? (
                        <button
                          type="button"
                          className="primary-button absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-lg bg-[#f59e0b] px-3 py-2 text-[11px] font-bold text-[#111010]"
                          onClick={() => openProjectImages(project, 0)}
                        >
                          <FiImage className="h-4 w-4" aria-hidden="true" />
                          View images
                        </button>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {project.logoUrl ? (
                          <img
                            src={project.logoUrl}
                            alt={`${project.title} logo`}
                            className="h-11 w-11 rounded-lg border border-white/8 bg-white object-cover"
                          />
                        ) : null}
                        <p className="font-mono-label text-[10px] font-bold uppercase tracking-[0.14em] text-[#f59e0b]">
                          {project.type}
                        </p>
                      </div>
                      <p className="font-mono-label text-[10px] text-[#7a6e62]/60">
                        #{String(index + 1).padStart(3, '0')}
                      </p>
                    </div>

                    <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-[#f5f0e8]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#c4b5a0]">{project.description}</p>
                    <p className="shine-panel mt-3 rounded-lg border border-[#f59e0b]/15 bg-[#f59e0b]/6 p-3 text-sm italic leading-6 text-[#d4a847]">
                      {project.impact}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="skill-chip px-3 py-1 text-[10px] font-bold">
                          {item}
                        </span>
                      ))}
                    </div>

                    {project.gallery?.length ? (
                      <div className="-mx-5 mt-5 border-y border-white/6 bg-[#0d0c0b] px-5 py-4">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <p className="font-mono-label text-[10px] font-bold uppercase tracking-[0.16em] text-[#7a6e62]">
                            Project screens
                          </p>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-[#c4b5a0] hover:border-[#f59e0b]/35 hover:text-[#f59e0b]"
                              onClick={() => scrollProjectGallery(project.title, -1)}
                              aria-label={`Scroll ${project.title} screenshots backward`}
                            >
                              <FiChevronLeft className="h-4 w-4" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-[#c4b5a0] hover:border-[#f59e0b]/35 hover:text-[#f59e0b]"
                              onClick={() => scrollProjectGallery(project.title, 1)}
                              aria-label={`Scroll ${project.title} screenshots forward`}
                            >
                              <FiChevronRight className="h-4 w-4" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div
                          ref={(el) => { galleryRefs.current[project.title] = el }}
                          className="flex gap-3 overflow-x-auto scroll-smooth"
                        >
                          {project.gallery.map((imageUrl, galleryIndex) => (
                            <button
                              key={imageUrl}
                              type="button"
                              className="shrink-0 rounded border border-white/8 opacity-75 transition hover:border-[#f59e0b]/40 hover:opacity-100"
                              onClick={() => openProjectImages(project, galleryIndex + 1)}
                            >
                              <img
                                src={imageUrl}
                                alt={`${project.title} screenshot ${galleryIndex + 1}`}
                                className="h-14 w-24 rounded object-cover object-top sm:h-16 sm:w-32"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {lightbox ? (
        <div className="fixed inset-0 z-80 flex items-center justify-center bg-[#0d0c0b]/92 p-4 backdrop-blur-md">
          <div className="w-full max-w-6xl rounded-xl border border-white/8 bg-[#1c1a18] shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between gap-4 border-b border-white/8 p-4">
              <div>
                <p className="font-mono-label text-[10px] font-bold uppercase tracking-[0.18em] text-[#f59e0b]">
                  Project image {lightbox.currentIndex + 1} of {lightbox.images.length}
                </p>
                <h3 className="mt-1 font-heading text-lg font-bold text-[#f5f0e8]">{lightbox.title}</h3>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 text-[#c4b5a0] hover:border-[#f59e0b]/40 hover:text-[#f59e0b]"
                onClick={() => setLightbox(null)}
                aria-label="Close image viewer"
              >
                <FiX className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="relative p-3 sm:p-5">
              <img
                src={lightbox.images[lightbox.currentIndex]}
                alt={`${lightbox.title} screenshot ${lightbox.currentIndex + 1}`}
                className="max-h-[72vh] w-full rounded border border-white/8 object-contain"
              />
              {lightbox.images.length > 1 ? (
                <>
                  <button
                    type="button"
                    className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/8 bg-[#1c1a18]/90 text-[#c4b5a0] backdrop-blur hover:border-[#f59e0b]/40 hover:text-[#f59e0b]"
                    onClick={() => stepLightbox(-1)}
                    aria-label="Previous image"
                  >
                    <FiChevronLeft className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/8 bg-[#1c1a18]/90 text-[#c4b5a0] backdrop-blur hover:border-[#f59e0b]/40 hover:text-[#f59e0b]"
                    onClick={() => stepLightbox(1)}
                    aria-label="Next image"
                  >
                    <FiChevronRight className="h-6 w-6" aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Projects
