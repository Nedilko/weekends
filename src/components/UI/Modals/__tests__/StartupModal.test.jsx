import StartupModal from '@UI/Modals/StartupModal'
import { render, screen, userEvent } from '@utils/test-utils'
import ReactDOM from 'react-dom'

describe('StartupModal', () => {
  const handleApply = vi.fn()

  const settings = {
    useSystemTheme: false,
    theme: 'light',
    greetingsText: 'sample greeting',
    day: 5,
    hour: 18,
    isFirstLoad: false,
  }

  beforeAll(() => {
    ReactDOM.createPortal = vi.fn((element) => {
      return element
    })
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
    window.HTMLElement.prototype.scrollIntoView.mockClear()
  })

  afterAll(() => {
    ReactDOM.createPortal.mockRestore()
    window.HTMLElement.prototype.scrollIntoView.mockRestore()
  })

  it('should be in the document', async () => {
    render(
      <StartupModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
      />
    )
    expect(screen.getByTestId('startup-modal')).toMatchSnapshot()
  })

  it('should handle Apply with new settings', async () => {
    const user = userEvent.setup()
    render(
      <StartupModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
      />
    )

    await user.click(screen.getByText('Friday'))
    await user.click(screen.getByText('Saturday'))
    await user.click(screen.getByText('18:00'))
    await user.click(screen.getByText('17:00'))
    await user.click(screen.getByRole('button', { name: 'Apply' }))
    expect(handleApply).toHaveBeenCalledWith({
      day: 6,
      hour: 17,
    })
  })
})
