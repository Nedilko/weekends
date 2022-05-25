import ModalRow from '@UI/Modals/ModalRow'
import { render, screen } from '@utils/test-utils'

describe('modal row', () => {
  it('renders content', () => {
    const { container } = render(<ModalRow>some text</ModalRow>)
    expect(screen.getByText('some text')).toBeInTheDocument()
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
