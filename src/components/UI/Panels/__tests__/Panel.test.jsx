import Panel from '@UI/Panels/Panel'
import { render, screen } from '@utils/test-utils'

describe('panel', () => {
  it('renders text', () => {
    const { container } = render(<Panel>some text</Panel>)
    expect(screen.getByText('some text')).toBeInTheDocument()
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
