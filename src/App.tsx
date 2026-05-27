import { useCallback, useEffect, useState } from 'react'
import { Footer, Header } from './components/layout'
import { About, Contact, Education, Experience, Hero, Projects, Skills } from './components/sections'
import { CvModal } from './components/ui'
import { portfolio } from './data/portfolio'

const HEADER_OFFSET = 88

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

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
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const initialHash = window.location.hash || '#home'
    window.history.replaceState(null, '', initialHash)
    window.setTimeout(() => scrollToSection(initialHash, 'auto'), 0)

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
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsCvModalOpen(false)
      }
    }

    document.body.style.overflow = isCvModalOpen ? 'hidden' : ''
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCvModalOpen])

  return (
    <div className="mobile-safe-bottom relative min-h-screen overflow-x-hidden bg-[#051424] text-[#d4e4fa]">
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
        <Hero profile={portfolio.profile} stats={portfolio.stats} />
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
    </div>
  )
}

export default App
