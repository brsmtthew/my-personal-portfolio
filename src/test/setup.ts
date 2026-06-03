import '@testing-library/jest-dom'

// matchMedia — used by useReveal and other hooks
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// IntersectionObserver — used by useReveal
globalThis.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
})) as unknown as typeof IntersectionObserver

// MutationObserver — used by useReveal
globalThis.MutationObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
})) as unknown as typeof MutationObserver

// scroll APIs
window.scrollTo = vi.fn()
window.requestAnimationFrame = vi.fn((cb) => { cb(0); return 0 })
window.cancelAnimationFrame = vi.fn()

// history API
Object.defineProperty(window, 'history', {
  writable: true,
  value: {
    scrollRestoration: 'auto',
    pushState: vi.fn(),
    replaceState: vi.fn(),
  },
})
