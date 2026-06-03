import { render, screen } from '@testing-library/react'
import Hero from '../components/sections/Hero'
import { portfolio } from '../data/portfolio'

const props = { profile: portfolio.profile, stats: portfolio.stats, onNavigate: vi.fn() }

describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero {...props} />)
  })

  it('displays each word of the profile name', () => {
    render(<Hero {...props} />)
    portfolio.profile.name.split(' ').filter(Boolean).forEach((word) => {
      expect(screen.getByText(word)).toBeInTheDocument()
    })
  })

  it('shows availability status', () => {
    render(<Hero {...props} />)
    expect(screen.getByText(portfolio.profile.availability)).toBeInTheDocument()
  })

  it('renders View My Work and Hire Me CTAs', () => {
    render(<Hero {...props} />)
    expect(screen.getByRole('button', { name: /view my work/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /hire me/i })).toBeInTheDocument()
  })

  it('calls onNavigate with #work when View My Work is clicked', async () => {
    const onNavigate = vi.fn()
    render(<Hero {...props} onNavigate={onNavigate} />)
    screen.getByRole('button', { name: /view my work/i }).click()
    expect(onNavigate).toHaveBeenCalledWith('#work')
  })

  it('renders all stats', () => {
    render(<Hero {...props} />)
    portfolio.stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
    })
  })

  it('renders focus area chips', () => {
    render(<Hero {...props} />)
    portfolio.profile.focusAreas.forEach((area) => {
      expect(screen.getByText(area)).toBeInTheDocument()
    })
  })
})
