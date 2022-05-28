import Actiontext from '../ActionText'
import { render, screen } from '@utils/test-utils'

describe('Actiontext', () => {
  it('should render', () => {
    render(<Actiontext />)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
    expect(title).toMatchSnapshot()
  })
})
