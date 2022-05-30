// import Settings from '@store/Settings'
import { render, screen, userEvent } from '@utils/test-utils'
import SettingsContext, { SettingsContextProvider } from '@store/Settings'
import { useContext } from 'react'
import { loadSettings, writeSettings } from '@utils/dataAdapter'

vi.mock('@utils/dataAdapter')

describe('Settings provider consistance data', () => {
  function WrappedComponent() {
    const { data, handleApply } = useContext(SettingsContext)
    return (
      <>
        <div>{JSON.stringify(data, null, '\t')}</div>
        <button
          onClick={() =>
            handleApply({
              hour: 19,
              greetingsText: 'Hello world',
              theme: 'dark',
              useSystemTheme: true,
              isFirstLoad: false,
            })
          }
        >
          Apply
        </button>
      </>
    )
  }

  beforeEach(() => {
    loadSettings.mockImplementation(() => ({
      day: 6,
      hour: 18,
      greetingsText: 'Hello',
      theme: 'light',
      useSystemTheme: false,
      isFirstLoad: true,
    }))
    loadSettings.mockClear()
    writeSettings.mockImplementation(() => {})
    writeSettings.mockClear()
  })

  it('should render all data', () => {
    const { container } = render(
      <SettingsContextProvider>
        <WrappedComponent />
      </SettingsContextProvider>
    )
    expect(container).toMatchSnapshot()
  })

  it('should load settings', () => {
    render(
      <SettingsContextProvider>
        <WrappedComponent />
      </SettingsContextProvider>
    )
    expect(loadSettings).toHaveBeenCalledTimes(1)
    expect(writeSettings).not.toHaveBeenCalled()
  })

  it('should write settings', async () => {
    const user = userEvent.setup()
    render(
      <SettingsContextProvider>
        <WrappedComponent />
      </SettingsContextProvider>
    )
    await user.click(screen.getByRole('button', { name: /apply/i }))
    expect(loadSettings).toHaveBeenCalledTimes(2)
    expect(writeSettings).toHaveBeenCalledTimes(1)
    expect(writeSettings).toHaveBeenCalledWith({
      day: 6,
      hour: 19,
      greetingsText: 'Hello world',
      theme: 'dark',
      useSystemTheme: true,
      isFirstLoad: false,
    })
  })
})
