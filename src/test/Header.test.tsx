import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/layout/Header'
import { portfolio } from '../data/portfolio'

const props = {
  activeSection: 'home',
  name: portfolio.profile.name,
  navItems: portfolio.navItems,
  onNavigate: vi.fn(),
  onOpenCv: vi.fn(),
  photoUrl: portfolio.profile.photoUrl,
}

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header {...props} />)
  })

  it('renders all desktop nav items', () => {
    render(<Header {...props} />)
    portfolio.navItems.forEach((item) => {
      expect(screen.getAllByText(item.label).length).toBeGreaterThan(0)
    })
  })

  it('renders all 7 mobile dock items', () => {
    render(<Header {...props} />)
    // Some labels appear in both desktop nav and mobile dock — use getAllByText
    const labels = ['Home', 'About', 'Skills', 'Work', 'Exp', 'Edu', 'Contact']
    labels.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    })
  })

  it('calls onNavigate when a nav item is clicked', () => {
    const onNavigate = vi.fn()
    render(<Header {...props} onNavigate={onNavigate} />)
    const aboutBtns = screen.getAllByText('About')
    fireEvent.click(aboutBtns[0])
    expect(onNavigate).toHaveBeenCalledWith('#about')
  })

  it('opens the mobile dropdown when hamburger is clicked', () => {
    render(<Header {...props} />)
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(hamburger)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('calls onOpenCv when the View CV button is clicked', () => {
    const onOpenCv = vi.fn()
    render(<Header {...props} onOpenCv={onOpenCv} />)
    const cvBtns = screen.getAllByRole('button', { name: /view cv/i })
    fireEvent.click(cvBtns[0])
    expect(onOpenCv).toHaveBeenCalledTimes(1)
  })
})
