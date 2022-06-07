import StartupModal from '@UI/Modals/StartupModal'
import { render, screen, userEvent } from '@utils/test-utils'

describe('StartupModal', () => {
  const handleApply = jest.fn()

  const settings = {
    useSystemTheme: false,
    theme: 'light',
    greetingsText: 'sample greeting',
    day: 5,
    hour: 18,
    isFirstLoad: false,
  }

  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
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
      <StartupModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
      />
    )
    expect(screen.getByTestId('startup-modal')).toMatchSnapshot()
    document.body.removeChild(modalRoot)
  })

  it('should handle Apply with new settings', async () => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
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
    document.body.removeChild(modalRoot)
  })
})
