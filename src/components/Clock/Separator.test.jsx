import Separator from '@components/Clock/Separator'
import { render, screen } from '@utils/test-utils'

describe('text in the document', () => {
  it('separator is visible', () => {
    render(<Separator symbol="::" />)
    const title = screen.getByText(/::/i)
    expect(title).toBeInTheDocument()
  })
})
