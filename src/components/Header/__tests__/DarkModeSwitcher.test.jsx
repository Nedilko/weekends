import DarkModeSwitcher from '@components/Header/DarkModeSwitcher'
import { render, screen, userEvent } from '@utils/test-utils'
import { useSettingsData, useSettingsDispatch } from '@store/Settings'
import { vi } from 'vitest'

vi.mock('@store/Settings')

describe('DarkModeSwitcher', () => {
  const handleApply = vi.fn()

  beforeEach(() => {
    handleApply.mockClear()
    useSettingsData.mockClear()
    useSettingsDispatch.mockClear()
  })

  it('should be in the document', () => {
    useSettingsData.mockImplementation(() => ({
      useSystemTheme: false,
      theme: 'light',
    }))
    render(<DarkModeSwitcher />)
    const toggle = screen.getByRole('checkbox')
    expect(toggle).toBeInTheDocument()
  })

  it('shouldn not be in the document', () => {
    useSettingsData.mockImplementation(() => ({
      useSystemTheme: true,
      theme: 'light',
    }))
    render(<DarkModeSwitcher />)
    const toggle = screen.queryByRole('checkbox')
    expect(toggle).not.toBeInTheDocument()
  })

  it('should be turned off', () => {
    useSettingsData.mockImplementation(() => ({
      useSystemTheme: false,
      theme: 'light',
    }))
    render(<DarkModeSwitcher />)
    const toggle = screen.getByRole('checkbox')
    expect(toggle).not.toBeChecked()
  })

  it('should be turned on', () => {
    useSettingsData.mockImplementation(() => ({
      useSystemTheme: false,
      theme: 'dark',
    }))
    render(<DarkModeSwitcher />)
    const toggle = screen.getByRole('checkbox')
    expect(toggle).toBeChecked()
  })

  it('should apply light theme on click', async () => {
    useSettingsData.mockImplementation(() => ({
      useSystemTheme: false,
      theme: 'dark',
    }))
    useSettingsDispatch.mockImplementation(() => handleApply)
    render(<DarkModeSwitcher />)
    const toggle = screen.getByRole('checkbox')
    const user = userEvent.setup()
    await user.click(toggle)
    expect(handleApply).toBeCalledWith({ payload: 'light', type: 'setTheme' })
  })

  it('should apply dark theme on click', async () => {
    useSettingsData.mockImplementation(() => ({
      useSystemTheme: false,
      theme: 'light',
    }))
    render(<DarkModeSwitcher />)
    const toggle = screen.getByRole('checkbox')
    const user = userEvent.setup()
    await user.click(toggle)
    expect(handleApply).toBeCalledWith({ payload: 'dark', type: 'setTheme' })
  })
})
