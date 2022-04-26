import Actiontext from './Actiontext'
import { render, screen } from '../utils/test-utils'

describe('text in the document', () => {
  it('action text is visible', () => {
    render(<Actiontext />)
    const title = screen.getByText(/Time left to weekends/i)
    expect(title).toBeInTheDocument()
  })
})
