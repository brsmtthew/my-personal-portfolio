import { useCallback, useEffect, useRef, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { Footer, Header } from './components/layout'
import { About, Contact, Education, Experience, Hero, Projects, Skills } from './components/sections'
import { CvModal } from './components/ui'
import { portfolio } from './data/portfolio'

const HEADER_OFFSET = 88

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadingMounted, setLoadingMounted] = useState(true)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const backToTopRef = useRef<HTMLButtonElement>(null)

  const scrollToSection = useCallback((hash: string, behavior: ScrollBehavior = 'smooth') => {
    const id = hash.replace('#', '') || 'home'
    const element = document.getElementById(id)

    if (!element) {
      return
    }

    const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET

    window.scrollTo({
      top: Math.max(top, 0),
      behavior,
    })
    setActiveSection(id)
  }, [])

  const handleNavigate = useCallback(
    (href: string) => {
      scrollToSection(href)
      window.history.pushState(null, '', href)
    },
    [scrollToSection],
  )

  useEffect(() => {
    const t1 = setTimeout(() => setIsLoaded(true), 900)
    const t2 = setTimeout(() => setLoadingMounted(false), 1400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const initialHash = window.location.hash || '#home'
    window.history.replaceState(null, '', initialHash)
    setTimeout(() => scrollToSection(initialHash, 'auto'), 0)

    function handlePopState() {
      scrollToSection(window.location.hash || '#home', 'auto')
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [scrollToSection])

  useEffect(() => {
    const sectionIds = ['home', ...portfolio.navItems.map((item) => item.href.replace('#', ''))]
    let frameId = 0

    function updateActiveSection() {
      const marker = window.scrollY + HEADER_OFFSET + window.innerHeight * 0.28
      const bottomDistance = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight)
      let currentSection = sectionIds[0]

      for (const id of sectionIds) {
        const element = document.getElementById(id)

        if (element && element.offsetTop <= marker) {
          currentSection = id
        }
      }

      if (bottomDistance < 12) {
        currentSection = sectionIds[sectionIds.length - 1]
      }

      setActiveSection((previousSection) => {
        if (previousSection === currentSection) {
          return previousSection
        }

        const nextHash = `#${currentSection}`

        if (window.location.hash !== nextHash) {
          window.history.replaceState(null, '', nextHash)
        }

        return currentSection
      })

      if (progressBarRef.current) {
        const total = document.documentElement.scrollHeight - window.innerHeight
        const pct = total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0
        progressBarRef.current.style.width = `${pct}%`
      }

      if (backToTopRef.current) {
        const show = window.scrollY > 400
        backToTopRef.current.style.opacity = show ? '1' : '0'
        backToTopRef.current.style.pointerEvents = show ? 'auto' : 'none'
      }
    }

    function handleScroll() {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0
        updateActiveSection()
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)

      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isCvModalOpen ? 'hidden' : ''

    if (!isCvModalOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsCvModalOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCvModalOpen])

  return (
    <div className="mobile-safe-bottom relative min-h-screen overflow-x-hidden bg-[#051424] text-[#d4e4fa]">
      {loadingMounted && (
        <div
          className={`fixed inset-0 z-200 flex flex-col items-center justify-center bg-[#051424] transition-opacity duration-500 ${isLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
          aria-hidden={isLoaded}
        >
          <p className="font-heading text-5xl font-bold tracking-widest text-[#00f2ea]">BMD</p>
          <div className="relative mt-5 h-px w-28 overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute inset-y-0 left-0 w-full bg-[#00f2ea] shadow-[0_0_8px_rgba(0,242,234,0.8)]"
              style={{ animation: 'load-bar 0.9s ease-out forwards', transformOrigin: 'left' }}
            />
          </div>
          <p className="mt-4 font-mono-label text-[10px] uppercase tracking-[0.2em] text-[#849492]">
            Loading portfolio
          </p>
        </div>
      )}

      <div
        ref={progressBarRef}
        className="fixed left-0 top-0 z-99 h-0.5 bg-[#00f2ea] shadow-[0_0_8px_rgba(0,242,234,0.55)]"
        style={{ width: '0%' }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,242,234,0.12),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_28%),linear-gradient(180deg,#051424_0%,#010f1f_48%,#051424_100%)]" />
      <Header
        activeSection={activeSection}
        name={portfolio.profile.name}
        navItems={portfolio.navItems}
        onNavigate={handleNavigate}
        onOpenCv={() => setIsCvModalOpen(true)}
        photoUrl={portfolio.profile.photoUrl}
      />
      <main className="pt-16">
        <Hero profile={portfolio.profile} stats={portfolio.stats} onNavigate={handleNavigate} />
        <About profile={portfolio.profile} highlights={portfolio.highlights} />
        <Skills skillGroups={portfolio.skillGroups} />
        <Projects projects={portfolio.projects} />
        <Experience experiences={portfolio.experiences} />
        <Education education={portfolio.education} languages={portfolio.languages} />
        <Contact onOpenCv={() => setIsCvModalOpen(true)} profile={portfolio.profile} />
      </main>
      <Footer name={portfolio.profile.name} onOpenCv={() => setIsCvModalOpen(true)} />
      <CvModal
        cvUrl={portfolio.profile.cvUrl}
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      <button
        ref={backToTopRef}
        type="button"
        onClick={() => scrollToSection('#home')}
        className="fixed bottom-24 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#00f2ea]/40 bg-[#051424]/90 text-[#00f2ea] shadow-lg backdrop-blur transition-[opacity,transform] duration-300 hover:border-[#00f2ea] hover:bg-[#00f2ea]/10 hover:-translate-y-0.5 md:bottom-8 md:right-8"
        style={{ opacity: 0, pointerEvents: 'none' }}
        aria-label="Back to top"
      >
        <FiArrowUp className="h-4 w-4" />
      </button>
    </div>
  )
}

export default App
