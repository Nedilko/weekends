import Footer from '@components/Footer/Footer'
import { render, screen } from '@utils/test-utils'

describe('footer link', () => {
  it('is visible', () => {
    render(<Footer />)
    const footerLink = screen.getByRole('link')
    expect(footerLink).toBeInTheDocument()
    expect(footerLink).toMatchSnapshot()
  })
  it('has href', () => {
    render(<Footer />)
    const footerLink = screen.getByRole('link')
    const footerLinkHref = footerLink.getAttribute('href')
    const footerLinkTarget = footerLink.getAttribute('target')
    expect(footerLinkHref).toBe('https://nac.in.ua')
    expect(footerLinkTarget).toBe('_blank')
  })
})
