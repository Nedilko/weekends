import GeneralPanel from '@UI/Panels/GeneralPanel'
import { render } from '@utils/test-utils'

describe('panel', () => {
  it('renders text', () => {
    const { container, getByText } = render(
      <GeneralPanel>some text</GeneralPanel>
    )
    expect(getByText('some text')).toBeInTheDocument()
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
