import { render, screen } from '@testing-library/react'
import About from '../components/sections/About'
import { portfolio } from '../data/portfolio'

const props = { profile: portfolio.profile, highlights: portfolio.highlights }

describe('About', () => {
  it('renders without crashing', () => {
    render(<About {...props} />)
  })

  it('shows the section heading', () => {
    render(<About {...props} />)
    expect(screen.getByText(/About/i)).toBeInTheDocument()
  })

  it('renders location and availability from profile', () => {
    render(<About {...props} />)
    expect(screen.getByText(portfolio.profile.location)).toBeInTheDocument()
    expect(screen.getByText(portfolio.profile.availability)).toBeInTheDocument()
  })

  it('renders all highlight cards', () => {
    render(<About {...props} />)
    portfolio.highlights.forEach((h) => {
      expect(screen.getByText(h.title)).toBeInTheDocument()
    })
  })

  it('renders focus area chips', () => {
    render(<About {...props} />)
    portfolio.profile.focusAreas.forEach((area) => {
      expect(screen.getByText(area)).toBeInTheDocument()
    })
  })
})
