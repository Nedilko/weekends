import Panel from '@UI/Panel'
import { render } from '@utils/test-utils'

describe('panel', () => {
  it('renders text', () => {
    const { container, getByText } = render(<Panel>some text</Panel>)
    expect(getByText('some text')).toBeInTheDocument()
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
