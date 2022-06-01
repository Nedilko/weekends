import Digit from '@components/Clock/Digit'
import { render, screen } from '@utils/test-utils'

describe('Digit', () => {
  it('should render digit', () => {
    render(<Digit digit={12} />)
    const title = screen.getByText(/12/i)
    expect(title).toBeInTheDocument()
    expect(title).toMatchSnapshot()
  })
})
