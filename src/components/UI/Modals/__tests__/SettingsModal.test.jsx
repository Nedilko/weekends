import SettingsModal from '@UI/Modals/SettingsModal'
import { render, screen, userEvent } from '@utils/test-utils'
import ReactDOM from 'react-dom'

describe('SettingsModal', () => {
  const handleApply = vi.fn()
  const handleCancel = vi.fn()

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
      <SettingsModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
        onCancel={handleCancel}
      />
    )
    expect(screen.getByTestId('settings-modal')).toMatchSnapshot()
  })

  it('should toggle switcher', async () => {
    const user = userEvent.setup()
    render(
      <SettingsModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
        onCancel={handleCancel}
      />
    )
    const toggle = screen.getByRole('checkbox')
    await user.click(toggle)
    expect(toggle).toBeChecked()
  })

  it('should handle Apply with new settings', async () => {
    const user = userEvent.setup()
    render(
      <SettingsModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
        onCancel={handleCancel}
      />
    )

    const greetingsTextInput = screen.getByPlaceholderText('Have a beer')
    await user.clear(greetingsTextInput)
    await user.type(greetingsTextInput, 'new greeting')
    await user.click(screen.getByText('Friday'))
    await user.click(screen.getByText('Saturday'))
    await user.click(screen.getByText('18:00'))
    await user.click(screen.getByText('17:00'))
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: 'Apply' }))
    expect(handleApply).toHaveBeenCalledWith({
      greetingsText: 'new greeting',
      day: 6,
      hour: 17,
      useSystemTheme: true,
    })
  })
})
