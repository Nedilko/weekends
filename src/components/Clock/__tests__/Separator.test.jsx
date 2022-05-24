import Separator from '@components/Clock/Separator'
import { render, screen } from '@utils/test-utils'

describe('separator', () => {
  it('renders with custom text', () => {
    render(<Separator symbol="::" />)
    const separator = screen.getByText(/::/i)
    expect(separator).toBeInTheDocument()
    expect(separator).toMatchSnapshot()
  })
})
