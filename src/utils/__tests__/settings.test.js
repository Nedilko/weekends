import {
  getTimerData,
  getSystemTheme,
  applyTheme,
  getDefaultSettings,
} from '@utils/settings'

describe('settings', () => {
  it('should return timer data', () => {
    const friday = {
      day: 5,
      hour: 18,
    }
    expect(getTimerData(friday)).toEqual({
      days: 5,
      hours: 18,
      minutes: 0,
      seconds: 0,
    })
  })

  it('should return light theme is system is dark', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
    expect(getSystemTheme()).toEqual('dark')
  })

  it('should return light theme is system is light', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
    expect(getSystemTheme()).toEqual('light')
  })

  it('should apply dark theme', () => {
    applyTheme('dark')
    expect(document.documentElement).toHaveClass('dark')
  })

  it('should apply light theme', () => {
    document.documentElement.classList.add('dark')
    applyTheme('light')
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('should get default settings', () => {
    expect(getDefaultSettings()).toEqual({
      greetingsText: 'Have a beer!',
      day: 5,
      hour: 18,
      theme: 'light',
      useSystemTheme: false,
      isFirstLoad: true,
    })
  })
})
