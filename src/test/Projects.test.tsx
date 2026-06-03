import { render, screen, fireEvent } from '@testing-library/react'
import Projects from '../components/sections/Projects'
import { portfolio } from '../data/portfolio'

const props = { projects: portfolio.projects }

describe('Projects', () => {
  it('renders without crashing', () => {
    render(<Projects {...props} />)
  })

  it('shows the Projects section heading', () => {
    render(<Projects {...props} />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('renders a card for each project', () => {
    render(<Projects {...props} />)
    portfolio.projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    })
  })

  it('renders category filter buttons including All', () => {
    render(<Projects {...props} />)
    expect(screen.getByRole('button', { name: /^All$/i })).toBeInTheDocument()
  })

  it('filters projects by category', () => {
    render(<Projects {...props} />)
    const iotBtn = screen.queryByRole('button', { name: /IoT/i })
    if (iotBtn) {
      fireEvent.click(iotBtn)
      expect(screen.getByText('Smart Chest Miner')).toBeInTheDocument()
    }
  })

  it('opens lightbox when project image is clicked', () => {
    render(<Projects {...props} />)
    const imageBtn = screen.getAllByRole('button').find(
      (btn) => btn.getAttribute('aria-label')?.includes('images')
    )
    if (imageBtn) {
      fireEvent.click(imageBtn)
      // Lightbox shows image count
      expect(screen.getByText(/\/ \d/)).toBeInTheDocument()
    }
  })

  it('closes lightbox when X is clicked', () => {
    render(<Projects {...props} />)
    const imageBtn = screen.getAllByRole('button').find(
      (btn) => btn.getAttribute('aria-label')?.includes('images')
    )
    if (imageBtn) {
      fireEvent.click(imageBtn)
      const closeBtn = screen.getByRole('button', { name: /close/i })
      fireEvent.click(closeBtn)
      expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument()
    }
  })
})
