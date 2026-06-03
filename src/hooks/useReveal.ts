import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    // CSS already makes [data-reveal] fully visible under reduced-motion, but skip
    // all observer machinery so we don't do unnecessary DOM work.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll<Element>('[data-reveal]').forEach((el) => {
        el.classList.add('in-view')
      })
      return
    }

    // ------------------------------------------------------------------
    // 1. Synchronously reveal anything already in the viewport or already revealed.
    //    Also used as a post-scroll fallback.
    // ------------------------------------------------------------------
    function revealVisible() {
      document.querySelectorAll<Element>('[data-reveal]:not(.in-view)').forEach((el) => {
        if (el.getAttribute('data-revealed') === 'true') {
          el.classList.add('in-view')
          return
        }
        const { top, bottom } = el.getBoundingClientRect()
        if (top < window.innerHeight + 60 && bottom > -60) {
          el.classList.add('in-view')
          el.setAttribute('data-revealed', 'true')
        }
      })
    }

    // ------------------------------------------------------------------
    // 2. IntersectionObserver — reveals elements as they scroll into view.
    // ------------------------------------------------------------------
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            entry.target.setAttribute('data-revealed', 'true')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.04, rootMargin: '0px 0px 60px 0px' },
    )

    function observeAll() {
      document.querySelectorAll<Element>('[data-reveal]:not(.in-view)').forEach((el) => {
        if (el.getAttribute('data-revealed') === 'true') {
          el.classList.add('in-view')
        } else {
          io.observe(el)
        }
      })
    }

    // Initial pass
    revealVisible()
    observeAll()

    // ------------------------------------------------------------------
    // 3. MutationObserver — watches for NEW nodes and class resets (from React renders)
    // ------------------------------------------------------------------
    let moTimer = 0
    const mo = new MutationObserver((mutations) => {
      // Skip mutations caused by IO adding 'in-view' — only act on new DOM nodes
      // or a [data-reveal] element that just lost its in-view class (React re-render).
      const relevant = mutations.some((m) => {
        if (m.type === 'childList' && m.addedNodes.length > 0) return true
        if (m.type === 'attributes') {
          const el = m.target as Element
          return el.hasAttribute('data-reveal') && !el.classList.contains('in-view')
        }
        return false
      })
      if (!relevant) return
      clearTimeout(moTimer)
      moTimer = window.setTimeout(() => {
        revealVisible()
        observeAll()
      }, 50)
    })
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    })

    // ------------------------------------------------------------------
    // 4. Scroll fallback
    // ------------------------------------------------------------------
    let raf = 0
    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(revealVisible)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      mo.disconnect()
      clearTimeout(moTimer)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
}
