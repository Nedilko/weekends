import Greetings from './Greetings'
import { render, screen } from '../utils/test-utils'

describe('greeting in the document', () => {
  it('text is visible', () => {
    render(<Greetings />)
    const title = screen.getByText(/Have a beer/i)
    expect(title).toBeInTheDocument()
  })
})
