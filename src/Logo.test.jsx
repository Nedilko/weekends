import Logo from './Logo'
import { render, screen } from './utils/test-utils'

describe('is image in the document', () => {
  it('is image exists', () => {
    render(<Logo />)
    const logo = screen.getByRole('img')
    expect(logo).toBeInTheDocument()
  })
})
