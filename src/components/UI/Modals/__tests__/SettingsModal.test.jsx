import SettingsModal from '@UI/Modals/SettingsModal'
import { render, screen, userEvent } from '@utils/test-utils'

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
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    window.HTMLElement.prototype.scrollIntoView.mockClear()
  })

  afterAll(() => {
    window.HTMLElement.prototype.scrollIntoView.mockRestore()
  })

  it('should be in the document', async () => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
    render(
      <SettingsModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
        onCancel={handleCancel}
      />
    )
    expect(screen.getByTestId('settings-modal')).toMatchSnapshot()
    document.body.removeChild(modalRoot)
  })

  it('should toggle switcher', async () => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
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
    document.body.removeChild(modalRoot)
  })

  it('should handle Apply with new settings', async () => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
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
    document.body.removeChild(modalRoot)
  })
})
