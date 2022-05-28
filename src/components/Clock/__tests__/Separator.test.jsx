import Separator from '@components/Clock/Separator'
import { render, screen } from '@utils/test-utils'

describe('Separator', () => {
  it('should render with custom symbol', () => {
    render(<Separator symbol="::" />)
    const separator = screen.getByText(/::/i)
    expect(separator).toBeInTheDocument()
    expect(separator).toMatchSnapshot()
  })
})
