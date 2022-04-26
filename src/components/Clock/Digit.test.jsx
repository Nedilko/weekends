import Digit from './Digit'
import { render, screen } from '../../utils/test-utils'

describe('text in the document', () => {
  it('digit is visible', () => {
    render(<Digit digit={12} />)
    const title = screen.getByText(/12/i)
    expect(title).toBeInTheDocument()
  })
})
