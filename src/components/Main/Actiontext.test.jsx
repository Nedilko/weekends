import Actiontext from './ActionText'
import { render, screen } from '../../utils/test-utils'

describe('text in the document', () => {
  it('action text is visible', () => {
    render(<Actiontext />)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
    expect(title).toMatchSnapshot()
  })
})
