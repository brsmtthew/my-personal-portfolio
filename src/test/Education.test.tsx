import { render, screen } from '@testing-library/react'
import Education from '../components/sections/Education'
import { portfolio } from '../data/portfolio'

const props = { education: portfolio.education, languages: portfolio.languages }

describe('Education', () => {
  it('renders without crashing', () => {
    render(<Education {...props} />)
  })

  it('shows the Education section heading', () => {
    render(<Education {...props} />)
    expect(screen.getByText('Education')).toBeInTheDocument()
  })

  it('renders a card for each education entry', () => {
    render(<Education {...props} />)
    portfolio.education.forEach((edu) => {
      expect(screen.getByText(edu.school)).toBeInTheDocument()
      expect(screen.getByText(edu.degree)).toBeInTheDocument()
    })
  })

  it('renders period badges', () => {
    render(<Education {...props} />)
    portfolio.education.forEach((edu) => {
      expect(screen.getByText(edu.period)).toBeInTheDocument()
    })
  })

  it('renders all strength chips', () => {
    render(<Education {...props} />)
    portfolio.education.forEach((edu) => {
      edu.strengths.forEach((strength) => {
        expect(screen.getByText(strength)).toBeInTheDocument()
      })
    })
  })

  it('renders the languages panel with all languages', () => {
    render(<Education {...props} />)
    portfolio.languages.forEach((lang) => {
      expect(screen.getByText(lang)).toBeInTheDocument()
    })
  })
})
