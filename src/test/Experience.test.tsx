import { render, screen } from '@testing-library/react'
import Experience from '../components/sections/Experience'
import { portfolio } from '../data/portfolio'

const props = { experiences: portfolio.experiences }

describe('Experience', () => {
  it('renders without crashing', () => {
    render(<Experience {...props} />)
  })

  it('shows the Experience section heading', () => {
    render(<Experience {...props} />)
    expect(screen.getByText('Experience')).toBeInTheDocument()
  })

  it('renders a card for each experience item', () => {
    render(<Experience {...props} />)
    portfolio.experiences.forEach((exp) => {
      expect(screen.getByText(exp.role)).toBeInTheDocument()
      expect(screen.getByText(exp.company)).toBeInTheDocument()
    })
  })

  it('renders the period badge for each role', () => {
    render(<Experience {...props} />)
    portfolio.experiences.forEach((exp) => {
      expect(screen.getByText(exp.period)).toBeInTheDocument()
    })
  })

  it('renders all bullet point details', () => {
    render(<Experience {...props} />)
    portfolio.experiences.forEach((exp) => {
      exp.details.forEach((detail) => {
        expect(screen.getByText(detail)).toBeInTheDocument()
      })
    })
  })
})
