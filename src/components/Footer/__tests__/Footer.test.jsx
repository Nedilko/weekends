import Footer from '@components/Footer/Footer'
import { render, screen } from '@utils/test-utils'

describe('Footer', () => {
  it('should render link with text', () => {
    render(<Footer />)
    const footerLink = screen.getByRole('link')
    expect(footerLink).toBeInTheDocument()
    expect(footerLink).toMatchSnapshot()
  })
  it('should has attributes', () => {
    render(<Footer />)
    const footerLink = screen.getByRole('link')
    expect(footerLink).toHaveAttribute('href', 'https://nac.in.ua')
    expect(footerLink).toHaveAttribute('target', '_blank')
  })
})
