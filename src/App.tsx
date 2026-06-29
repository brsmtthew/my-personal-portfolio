import { useCallback, useEffect, useRef, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { Footer, Header } from './components/layout'
import { About, Certificates, Contact, Education, Experience, Hero, Projects, Skills } from './components/sections'
import { CvModal } from './components/ui'
import { portfolio } from './data/portfolio'
import { useReveal } from './hooks/useReveal'

const HEADER_OFFSET = 72

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadingMounted, setLoadingMounted] = useState(true)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const backToTopRef = useRef<HTMLButtonElement>(null)

  useReveal()

  const scrollToSection = useCallback((hash: string, behavior: ScrollBehavior = 'smooth') => {
    const id = hash.replace('#', '') || 'home'
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top: Math.max(top, 0), behavior })
    setActiveSection(id)
  }, [])

  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href)
    window.history.pushState(null, '', href)
  }, [scrollToSection])

  useEffect(() => {
    const t1 = setTimeout(() => setIsLoaded(true), 800)
    const t2 = setTimeout(() => setLoadingMounted(false), 1300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    const h = window.location.hash || '#home'
    window.history.replaceState(null, '', h)
    setTimeout(() => scrollToSection(h, 'auto'), 0)
    const onPop = () => scrollToSection(window.location.hash || '#home', 'auto')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [scrollToSection])

  useEffect(() => {
    const ids = ['home', ...portfolio.navItems.map((i) => i.href.replace('#', ''))]
    let fid = 0

    function update() {
      const marker = window.scrollY + HEADER_OFFSET + window.innerHeight * 0.28
      const bottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight)
      let cur = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker) cur = id
      }
      if (bottom < 12) cur = ids[ids.length - 1]
      setActiveSection((prev) => {
        if (prev === cur) return prev
        const nh = `#${cur}`
        if (window.location.hash !== nh) window.history.replaceState(null, '', nh)
        return cur
      })
      if (progressBarRef.current) {
        const tot = document.documentElement.scrollHeight - window.innerHeight
        progressBarRef.current.style.width = `${tot > 0 ? Math.min((window.scrollY / tot) * 100, 100) : 0}%`
      }
      if (backToTopRef.current) {
        const show = window.scrollY > 500
        backToTopRef.current.style.opacity = show ? '1' : '0'
        backToTopRef.current.style.pointerEvents = show ? 'auto' : 'none'
      }
    }

    function onScroll() {
      if (fid) return
      fid = window.requestAnimationFrame(() => { fid = 0; update() })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (fid) window.cancelAnimationFrame(fid)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isCvModalOpen ? 'hidden' : ''
    if (!isCvModalOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsCvModalOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [isCvModalOpen])

  return (
    <div className="mobile-safe-bottom relative min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f0f0f0]">
      {/* Loading screen */}
      {loadingMounted && (
        <div
          className={`fixed inset-0 z-200 flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${isLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
          aria-hidden={isLoaded}
        >
          <p className="font-mono-label text-4xl font-bold tracking-[0.3em] text-[#a3e635]">BMD</p>
          <div className="relative mt-6 h-px w-24 overflow-hidden bg-white/10">
            <div
              className="absolute inset-y-0 left-0 w-full bg-[#a3e635]"
              style={{ animation: 'load-bar 0.8s ease-out forwards', transformOrigin: 'left' }}
            />
          </div>
        </div>
      )}

      {/* Progress bar */}
      <div
        ref={progressBarRef}
        className="fixed left-0 top-0 z-99 h-px bg-[#a3e635]"
        style={{ width: '0%' }}
      />

      <Header
        activeSection={activeSection}
        name={portfolio.profile.name}
        navItems={portfolio.navItems}
        onNavigate={handleNavigate}
        onOpenCv={() => setIsCvModalOpen(true)}
        photoUrl={portfolio.profile.photoUrl}
      />
      <main className="pt-18">
        <Hero profile={portfolio.profile} stats={portfolio.stats} onNavigate={handleNavigate} />
        <About profile={portfolio.profile} highlights={portfolio.highlights} />
        <Skills skillGroups={portfolio.skillGroups} />
        <Projects projects={portfolio.projects} />
        <Experience experiences={portfolio.experiences} />
        <Education education={portfolio.education} />
        <Certificates certificates={portfolio.certificates} />
        <Contact onOpenCv={() => setIsCvModalOpen(true)} profile={portfolio.profile} />
      </main>
      <Footer name={portfolio.profile.name} onOpenCv={() => setIsCvModalOpen(true)} languages={portfolio.languages} />
      <CvModal cvUrl={portfolio.profile.cvUrl} isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />

      <button
        ref={backToTopRef}
        type="button"
        onClick={() => scrollToSection('#home')}
        className="fixed bottom-24 right-5 z-50 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] text-[#666] transition hover:-translate-y-0.5 hover:scale-110 hover:border-[#a3e635]/50 hover:text-[#a3e635] md:bottom-8 md:right-8"
        style={{ opacity: 0, pointerEvents: 'none' }}
        aria-label="Back to top"
      >
        <FiArrowUp className="h-4 w-4" />
      </button>
    </div>
  )
}

export default App
