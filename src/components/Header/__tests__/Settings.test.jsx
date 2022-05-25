import Settings from '@components/Header/Settings'
import SettingsContext from '@store/Settings'
import { render, vi, screen, userEvent } from '@utils/test-utils'
import ReactDOM from 'react-dom'

describe('Settings component', () => {
  const handleApply = vi.fn()

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
      <SettingsContext.Provider
        value={{
          data: {
            useSystemTheme: false,
            theme: 'light',
            greetingsText: 'sample greeting',
            day: 5,
            hour: 18,
            isFirstLoad: false,
          },
          handleApply,
        }}
      >
        <Settings />
      </SettingsContext.Provider>
    )
    expect(container).toMatchSnapshot()
  })

  it('should open settings modal', async () => {
    const user = userEvent.setup()
    render(
      <SettingsContext.Provider
        value={{
          data: {
            useSystemTheme: false,
            theme: 'light',
            greetingsText: 'sample greeting',
            day: 5,
            hour: 18,
            isFirstLoad: false,
          },
          handleApply,
        }}
      >
        <Settings />
      </SettingsContext.Provider>
    )
    const settingsIcon = screen.getByRole('img')
    await user.click(settingsIcon)
    const settingsModal = screen.getByTestId('settings-modal')
    expect(settingsModal).toBeInTheDocument()
  })

  it('should handle apply on Apply button click', async () => {
    const user = userEvent.setup()
    render(
      <SettingsContext.Provider
        value={{
          data: {
            useSystemTheme: false,
            theme: 'light',
            greetingsText: 'sample greeting',
            day: 5,
            hour: 18,
            isFirstLoad: false,
          },
          handleApply,
        }}
      >
        <Settings />
      </SettingsContext.Provider>
    )
    const settingsIcon = screen.getByRole('img')
    await user.click(settingsIcon)
    const applyButton = screen.getByRole('button', { name: /apply/i })
    await user.click(applyButton)
    expect(handleApply).toBeCalledTimes(1)
  })

  it('should close modal on Cancel button click', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SettingsContext.Provider
        value={{
          data: {
            useSystemTheme: false,
            theme: 'light',
            greetingsText: 'sample greeting',
            day: 5,
            hour: 18,
            isFirstLoad: false,
          },
          handleApply,
        }}
      >
        <Settings />
      </SettingsContext.Provider>
    )
    const settingsIcon = screen.getByRole('img')
    await user.click(settingsIcon)
    const cancelButton = screen.getByRole('button', { name: /cancel/i })
    await user.click(cancelButton)
    expect(container).toMatchSnapshot()
  })

  it('should toggle switcher', async () => {
    const user = userEvent.setup()
    render(
      <SettingsContext.Provider
        value={{
          data: {
            useSystemTheme: false,
            theme: 'light',
            greetingsText: 'sample greeting',
            day: 5,
            hour: 18,
            isFirstLoad: false,
          },
          handleApply,
        }}
      >
        <Settings />
      </SettingsContext.Provider>
    )
    const settingsIcon = screen.getByRole('img')
    await user.click(settingsIcon)
    const toggle = screen.getByRole('checkbox')
    await user.click(toggle)
    expect(toggle).toBeChecked()
  })
})
