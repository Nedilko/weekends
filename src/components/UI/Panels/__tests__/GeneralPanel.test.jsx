import GeneralPanel from '@UI/Panels/GeneralPanel'
import { render, screen } from '@utils/test-utils'

describe('panel', () => {
  it('renders text', () => {
    const { container } = render(<GeneralPanel>some text</GeneralPanel>)
    expect(screen.getByText('some text')).toBeInTheDocument()
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
