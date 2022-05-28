import Footer from '@components/Footer/Footer'
import { render, screen } from '@utils/test-utils'

describe('Footer', () => {
  it('should render', () => {
    render(<Footer />)
    const footerLink = screen.getByRole('link')
    expect(footerLink).toBeInTheDocument()
    expect(footerLink).toMatchSnapshot()
  })
  it('should has href', () => {
    render(<Footer />)
    const footerLink = screen.getByRole('link')
    const footerLinkHref = footerLink.getAttribute('href')
    const footerLinkTarget = footerLink.getAttribute('target')
    expect(footerLinkHref).toBe('https://nac.in.ua')
    expect(footerLinkTarget).toBe('_blank')
  })
})
