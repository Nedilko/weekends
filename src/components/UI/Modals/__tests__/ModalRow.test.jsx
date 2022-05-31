import ModalRow from '@UI/Modals/ModalRow'
import { render, screen } from '@utils/test-utils'

describe('ModalRow', () => {
  it('should render row content', () => {
    const { container } = render(<ModalRow>some text</ModalRow>)
    expect(screen.getByText('some text')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
