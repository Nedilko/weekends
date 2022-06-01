import GeneralPanel from '@UI/Panels/GeneralPanel'
import { render, screen } from '@utils/test-utils'

describe('GeneralPanel', () => {
  it('should render content', () => {
    const { container } = render(<GeneralPanel>some content</GeneralPanel>)
    expect(screen.getByText('some content')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should render with additional classes', () => {
    render(<GeneralPanel className="sample-class">some content</GeneralPanel>)
    expect(screen.getByText('some content')).toHaveClass('sample-class')
  })
})
