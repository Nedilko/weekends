import Settings from '@components/Header/Settings'
import SettingsContext from '@store/Settings'
import { render, vi, screen, userEvent } from '@utils/test-utils'
import ReactDOM from 'react-dom'

describe('Settings', () => {
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
})
