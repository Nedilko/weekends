import {
  getTimerData,
  getSystemTheme,
  applyTheme,
  getDefaultSettings,
} from '@utils/settings'

describe('settings', () => {
  it('should return getTimerData given a day and hour', () => {
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

  it('should return dark theme if system theme is dark', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
    expect(getSystemTheme()).toEqual('dark')
  })

  it('should return light theme if system theme is light', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
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
