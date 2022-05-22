import ModalRow from '@UI/Modals/ModalRow'
import { render } from '@utils/test-utils'

describe('modal row', () => {
  it('renders content', () => {
    const { container, getByText } = render(<ModalRow>some text</ModalRow>)
    expect(getByText('some text')).toBeInTheDocument()
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
