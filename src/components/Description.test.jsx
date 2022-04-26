import Description from './Description'
import { render, screen } from '../utils/test-utils'

describe('text in the document', () => {
  it('title is visible', () => {
    render(<Description />)
    const title = screen.getByText(/weekends countdown/i)
    expect(title).toBeInTheDocument()
  })
})
