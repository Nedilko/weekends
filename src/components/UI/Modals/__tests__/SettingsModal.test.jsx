import SettingsModal from '@UI/Modals/SettingsModal'
import { render, vi, screen, userEvent } from '@utils/test-utils'
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
  })

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
  })

  it('should be in the document', async () => {
    const { container } = render(
      <SettingsModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
        onCancel={handleCancel}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should handle click on Apply button', async () => {
    const user = userEvent.setup()
    render(
      <SettingsModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
        onCancel={handleCancel}
      />
    )
    const applyButton = screen.getByRole('button', { name: /apply/i })
    await user.click(applyButton)
    expect(handleApply).toBeCalledTimes(1)
  })

  it('should handle click on Cancle button', async () => {
    const user = userEvent.setup()
    render(
      <SettingsModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
        onCancel={handleCancel}
      />
    )
    const cancelButton = screen.getByRole('button', { name: /cancel/i })
    await user.click(cancelButton)
    expect(handleCancel).toBeCalledTimes(1)
  })
})
