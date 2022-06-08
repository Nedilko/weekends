import DarkModeSwitcher from '@components/Header/DarkModeSwitcher'
import SettingsContext from '@store/Settings'
import { render, screen, userEvent } from '@utils/test-utils'
import { useState } from 'react'

describe('DarkModeSwitcher', () => {
  const handleApply = jest.fn()

  beforeEach(() => {
    handleApply.mockClear()
  })

  it('should be in the document', () => {
    render(
      <SettingsContext.Provider
        value={{ data: { useSystemTheme: false, theme: 'light' }, handleApply }}
      >
        <DarkModeSwitcher />
      </SettingsContext.Provider>
    )
    const toggle = screen.getByRole('checkbox')
    expect(toggle).toBeInTheDocument()
  })

  it('shouldn not be in the document', () => {
    render(
      <SettingsContext.Provider
        value={{ data: { useSystemTheme: true, theme: 'light' }, handleApply }}
      >
        <DarkModeSwitcher />
      </SettingsContext.Provider>
    )
    const toggle = screen.queryByRole('checkbox')
    expect(toggle).not.toBeInTheDocument()
  })

  it('should be turned off', () => {
    render(
      <SettingsContext.Provider
        value={{ data: { useSystemTheme: false, theme: 'light' }, handleApply }}
      >
        <DarkModeSwitcher />
      </SettingsContext.Provider>
    )
    const toggle = screen.getByRole('checkbox')
    expect(toggle).not.toBeChecked()
  })

  it('should be turned on', () => {
    render(
      <SettingsContext.Provider
        value={{ data: { useSystemTheme: false, theme: 'dark' }, handleApply }}
      >
        <DarkModeSwitcher />
      </SettingsContext.Provider>
    )
    const toggle = screen.getByRole('checkbox')
    expect(toggle).toBeChecked()
  })

  it('should apply light theme on click', async () => {
    render(
      <SettingsContext.Provider
        value={{ data: { useSystemTheme: false, theme: 'dark' }, handleApply }}
      >
        <DarkModeSwitcher />
      </SettingsContext.Provider>
    )
    const toggle = screen.getByRole('checkbox')
    const user = userEvent.setup()
    await user.click(toggle)
    expect(handleApply).toBeCalledWith({ theme: 'light' })
  })

  it('should apply dark theme on click', async () => {
    render(
      <SettingsContext.Provider
        value={{ data: { useSystemTheme: false, theme: 'light' }, handleApply }}
      >
        <DarkModeSwitcher />
      </SettingsContext.Provider>
    )
    const toggle = screen.getByRole('checkbox')
    const user = userEvent.setup()
    await user.click(toggle)
    expect(handleApply).toBeCalledWith({ theme: 'dark' })
  })

  it('should switch toggle after click', async () => {
    const MockedDarkModeSwitcher = () => {
      const [theme, setTheme] = useState('dark')

      const handleApply = () => {
        setTheme((oldTheme) => (oldTheme === 'light' ? 'dark' : 'light'))
      }

      return (
        <SettingsContext.Provider
          value={{
            data: { useSystemTheme: false, theme },
            handleApply,
          }}
        >
          <DarkModeSwitcher />
        </SettingsContext.Provider>
      )
    }

    render(<MockedDarkModeSwitcher />)
    const toggle = screen.getByRole('checkbox')
    const user = userEvent.setup()
    await user.click(toggle)
    expect(toggle).not.toBeChecked()
    await user.click(toggle)
    expect(toggle).toBeChecked()
  })
})
