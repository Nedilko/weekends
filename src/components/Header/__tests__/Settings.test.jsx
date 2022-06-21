import Settings from '@components/Header/Settings'
import { useSettingsData, useSettingsDispatch } from '@store/Settings'
import { render, screen, userEvent } from '@utils/test-utils'

vi.mock('@store/Settings')

vi.mock('@components/Header/SettingsIcon', () => {
  return {
    default: ({ onClick }) => {
      return (
        <button onClick={onClick} data-testid="settings-icon">
          settings
        </button>
      )
    },
  }
})

vi.mock('@UI/Modals/SettingsModal', () => {
  return {
    default: ({ onApply, onCancel }) => (
      <div data-testid="settings-modal">
        <button onClick={onApply}>Apply</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    ),
  }
})

describe('Settings component', () => {
  const handleApply = vi.fn()

  beforeAll(() => {
    useSettingsData.mockImplementation(() => ({}))
    useSettingsDispatch.mockImplementation(() => handleApply)
  })

  beforeEach(() => {
    handleApply.mockClear()
    useSettingsData.mockClear()
    useSettingsDispatch.mockClear()
  })

  it('should render settigns icon', async () => {
    render(<Settings />)
    expect(
      screen.getByRole('button', { name: /settings/i })
    ).toBeInTheDocument()
  })

  it('should open settings modal', async () => {
    const user = userEvent.setup()
    render(<Settings />)
    const settingsIcon = screen.getByRole('button', { name: /settings/i })
    await user.click(settingsIcon)
    const settingsModal = screen.getByTestId('settings-modal')
    expect(settingsModal).toBeInTheDocument()
  })

  it('should close Settings Modal on Apply button click', async () => {
    const user = userEvent.setup()
    render(<Settings />)
    const settingsIcon = screen.getByRole('button', { name: /settings/i })
    await user.click(settingsIcon)
    const applyButton = screen.getByRole('button', { name: /apply/i })
    await user.click(applyButton)
    expect(screen.queryByTestId('settings-modal')).not.toBeInTheDocument()
  })

  it('should call apply handler for settings provider on Apply button click', async () => {
    const user = userEvent.setup()
    render(<Settings />)
    const settingsIcon = screen.getByRole('button', { name: /settings/i })
    await user.click(settingsIcon)
    const applyButton = screen.getByRole('button', { name: /apply/i })
    await user.click(applyButton)
    expect(handleApply).toHaveBeenCalledTimes(1)
  })

  it('should close Settings Modal on Cancel button click', async () => {
    const user = userEvent.setup()
    render(<Settings />)
    const settingsIcon = screen.getByRole('button', { name: /settings/i })
    await user.click(settingsIcon)
    const cancelButton = screen.getByRole('button', { name: /cancel/i })
    await user.click(cancelButton)
    expect(screen.queryByTestId('settings-modal')).not.toBeInTheDocument()
  })

  it('should NOT call apply handler for settings provider on Cancel button click', async () => {
    const user = userEvent.setup()
    render(<Settings />)
    const settingsIcon = screen.getByRole('button', { name: /settings/i })
    await user.click(settingsIcon)
    const cancelButton = screen.getByRole('button', { name: /cancel/i })
    await user.click(cancelButton)
    expect(handleApply).not.toHaveBeenCalled()
  })
})
