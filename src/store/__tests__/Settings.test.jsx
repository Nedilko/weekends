import { render, screen, userEvent } from '@utils/test-utils'
import {
  SettingsContextProvider,
  useSettingsData,
  useSettingsDispatch,
} from '@store/Settings'
import { loadSettings, writeSettings } from '@utils/dataAdapter'

vi.mock('@utils/dataAdapter')

function WrappedComponent() {
  const settings = useSettingsData()
  const dispatch = useSettingsDispatch()
  return (
    <>
      <div>{JSON.stringify(settings, null, '\t')}</div>
      <button
        onClick={() =>
          dispatch({
            type: 'set',
            payload: {
              hour: 19,
              greetingsText: 'Hello world',
              theme: 'dark',
              useSystemTheme: true,
              isFirstLoad: false,
            },
          })
        }
      >
        Apply
      </button>
    </>
  )
}

describe('Settings context provider', () => {
  beforeEach(() => {
    writeSettings.mockImplementation(() => {})
  })

  afterEach(() => {
    loadSettings.mockClear()
    writeSettings.mockClear()
  })

  it('should load settings', () => {
    loadSettings.mockImplementation(() => ({
      day: 6,
      hour: 18,
      greetingsText: 'Hello',
      theme: 'light',
      useSystemTheme: false,
      isFirstLoad: true,
    }))

    render(
      <SettingsContextProvider>
        <WrappedComponent />
      </SettingsContextProvider>
    )
    expect(loadSettings).toHaveBeenCalledTimes(1)
    expect(writeSettings).not.toHaveBeenCalled()
  })

  it('should load alternative settings', () => {
    loadSettings.mockImplementation(() => ({
      day: 6,
      hour: 18,
      greetingsText: 'Hello',
      theme: 'light',
      useSystemTheme: true,
      isFirstLoad: true,
    }))

    render(
      <SettingsContextProvider>
        <WrappedComponent />
      </SettingsContextProvider>
    )
    expect(loadSettings).toHaveBeenCalledTimes(1)
    expect(writeSettings).not.toHaveBeenCalled()
  })

  it('should write settings', async () => {
    loadSettings.mockImplementation(() => ({
      day: 6,
      hour: 18,
      greetingsText: 'Hello',
      theme: 'light',
      useSystemTheme: false,
      isFirstLoad: true,
    }))

    const user = userEvent.setup()
    render(
      <SettingsContextProvider>
        <WrappedComponent />
      </SettingsContextProvider>
    )
    await user.click(screen.getByRole('button', { name: /apply/i }))
    expect(loadSettings).toHaveBeenCalledTimes(1)
    expect(writeSettings).toHaveBeenCalledWith({
      hour: 19,
      greetingsText: 'Hello world',
      theme: 'dark',
      useSystemTheme: true,
      isFirstLoad: false,
    })
  })

  it('should write alternative settings', async () => {
    function WrappedComponentNew() {
      const settings = useSettingsData()
      const dispatch = useSettingsDispatch()
      return (
        <>
          <div>{JSON.stringify(settings, null, '\t')}</div>
          <button
            onClick={() =>
              dispatch({
                type: 'setTheme',
                payload: 'dark',
              })
            }
          >
            Apply
          </button>
        </>
      )
    }
    loadSettings.mockImplementation(() => ({
      day: 6,
      hour: 18,
      greetingsText: 'Hello',
      theme: 'light',
      useSystemTheme: true,
      isFirstLoad: true,
    }))

    const user = userEvent.setup()
    render(
      <SettingsContextProvider>
        <WrappedComponentNew />
      </SettingsContextProvider>
    )
    await user.click(screen.getByRole('button', { name: /apply/i }))
    expect(loadSettings).toHaveBeenCalledTimes(1)
    expect(writeSettings).toHaveBeenCalledWith({
      hour: 18,
      day: 6,
      greetingsText: 'Hello',
      theme: 'dark',
      useSystemTheme: true,
      isFirstLoad: true,
    })
  })

  it('should change theme', async () => {
    function WrappedComponentNew() {
      const settings = useSettingsData()
      const dispatch = useSettingsDispatch()
      return (
        <input
          type="checkbox"
          checked={settings.theme === 'dark'}
          onChange={() =>
            dispatch({
              type: 'setTheme',
              payload: 'dark',
            })
          }
        ></input>
      )
    }
    loadSettings.mockImplementation(() => ({
      theme: 'light',
    }))

    const user = userEvent.setup()
    render(
      <SettingsContextProvider>
        <WrappedComponentNew />
      </SettingsContextProvider>
    )
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('should change all settings', async () => {
    function WrappedComponentNew() {
      const settings = useSettingsData()
      const dispatch = useSettingsDispatch()
      return (
        <div
          data-testid="component"
          onClick={() =>
            dispatch({
              type: 'set',
              payload: {
                hour: 18,
                day: 6,
                greetingsText: 'Hello',
                theme: 'dark',
                useSystemTheme: true,
                isFirstLoad: true,
              },
            })
          }
        >
          {JSON.stringify(settings)}
        </div>
      )
    }
    loadSettings.mockImplementation(() => ({
      hour: 10,
      day: 3,
      greetingsText: 'sample',
      theme: 'light',
      useSystemTheme: false,
      isFirstLoad: false,
    }))

    const user = userEvent.setup()
    render(
      <SettingsContextProvider>
        <WrappedComponentNew />
      </SettingsContextProvider>
    )
    const component = screen.getByTestId('component')
    await user.click(component)
    expect(component).toHaveTextContent(
      '{"hour":18,"day":6,"greetingsText":"Hello","theme":"dark","useSystemTheme":true,"isFirstLoad":true}'
    )
  })
})
