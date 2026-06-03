import { render, screen, fireEvent } from '@testing-library/react'
import Skills from '../components/sections/Skills'
import { portfolio } from '../data/portfolio'

const props = { skillGroups: portfolio.skillGroups }

describe('Skills', () => {
  it('renders without crashing', () => {
    render(<Skills {...props} />)
  })

  it('shows the Skills section heading', () => {
    render(<Skills {...props} />)
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('renders a row for each skill group', () => {
    render(<Skills {...props} />)
    portfolio.skillGroups.forEach((group) => {
      expect(screen.getByText(group.title)).toBeInTheDocument()
    })
  })

  it('opens the skill modal when a row is clicked', () => {
    render(<Skills {...props} />)
    const firstRow = screen.getAllByRole('button').find(
      (btn) => btn.getAttribute('data-reveal') !== null
    )
    expect(firstRow).toBeDefined()
    fireEvent.click(firstRow!)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes the skill modal when the close button is clicked', () => {
    render(<Skills {...props} />)
    const rows = screen.getAllByRole('button').filter(
      (btn) => btn.getAttribute('data-reveal') !== null
    )
    fireEvent.click(rows[0])
    const closeBtn = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeBtn)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows EXP/PRO legend in the modal', () => {
    render(<Skills {...props} />)
    const rows = screen.getAllByRole('button').filter(
      (btn) => btn.getAttribute('data-reveal') !== null
    )
    fireEvent.click(rows[0])
    // "Expert" and "Proficient" appear in both legend text and tier badges
    expect(screen.getAllByText(/Expert/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Proficient/i).length).toBeGreaterThan(0)
  })
})
