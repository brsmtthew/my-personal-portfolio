import { render, screen, fireEvent } from '@testing-library/react'
import Contact from '../components/sections/Contact'
import { portfolio } from '../data/portfolio'

const props = { onOpenCv: vi.fn(), profile: portfolio.profile }

describe('Contact', () => {
  it('renders without crashing', () => {
    render(<Contact {...props} />)
  })

  it('shows the Contact section heading', () => {
    render(<Contact {...props} />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('displays the email address', () => {
    render(<Contact {...props} />)
    const emails = screen.getAllByText(portfolio.profile.email)
    expect(emails.length).toBeGreaterThan(0)
  })

  it('displays phone and location', () => {
    render(<Contact {...props} />)
    expect(screen.getByText(portfolio.profile.phone)).toBeInTheDocument()
    expect(screen.getByText(portfolio.profile.location)).toBeInTheDocument()
  })

  it('shows validation errors when submitting an empty form', () => {
    render(<Contact {...props} />)
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    const errors = screen.getAllByText(/required/i)
    expect(errors.length).toBe(4) // name, email, subject, message
  })

  it('shows an email format error for an invalid email', () => {
    render(<Contact {...props} />)
    fireEvent.change(screen.getByRole('textbox', { name: /your email/i }), {
      target: { value: 'not-an-email' },
    })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
  })

  it('calls onOpenCv when the View CV social button is clicked', () => {
    const onOpenCv = vi.fn()
    render(<Contact {...props} onOpenCv={onOpenCv} />)
    const cvBtn = screen.getByRole('button', { name: /view cv/i })
    fireEvent.click(cvBtn)
    expect(onOpenCv).toHaveBeenCalledTimes(1)
  })
})
