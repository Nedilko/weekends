import Actiontext from '../ActionText'
import { render, screen } from '../../../utils/test-utils'

describe('action text', () => {
  it('is visible', () => {
    render(<Actiontext />)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
    expect(title).toMatchSnapshot()
  })
})
