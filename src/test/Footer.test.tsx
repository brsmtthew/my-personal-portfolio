import { render, screen, fireEvent } from '@testing-library/react'
import Footer from '../components/layout/Footer'
import { portfolio } from '../data/portfolio'

const props = { name: portfolio.profile.name, onOpenCv: vi.fn(), languages: portfolio.languages }

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer {...props} />)
  })

  it('displays the portfolio owner name', () => {
    render(<Footer {...props} />)
    const names = screen.getAllByText(portfolio.profile.name)
    expect(names.length).toBeGreaterThan(0)
  })

  it('renders all navigation links', () => {
    render(<Footer {...props} />)
    const navLabels = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']
    navLabels.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })
  })

  it('displays contact email and phone', () => {
    render(<Footer {...props} />)
    expect(screen.getByText(portfolio.profile.email)).toBeInTheDocument()
  })

  it('calls onOpenCv when View CV is clicked', () => {
    const onOpenCv = vi.fn()
    render(<Footer {...props} onOpenCv={onOpenCv} />)
    fireEvent.click(screen.getByRole('button', { name: /view cv/i }))
    expect(onOpenCv).toHaveBeenCalledTimes(1)
  })

  it('renders all languages', () => {
    render(<Footer {...props} />)
    portfolio.languages.forEach((lang) => {
      expect(screen.getByText(lang)).toBeInTheDocument()
    })
  })

  it('shows the current year in the copyright notice', () => {
    render(<Footer {...props} />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
