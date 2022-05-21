import GeneralPanel from '@UI/GeneralPanel'
import { render } from '@utils/test-utils'

describe('settings icon is', () => {
  it('in the document', () => {
    const { container, getByText } = render(
      <GeneralPanel>some text</GeneralPanel>
    )
    expect(getByText('some text')).toBeInTheDocument()
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
