/* eslint-disable security/detect-object-injection */
import { loadSettings, writeSettings } from '@utils/dataAdapter'
import { vi } from 'vitest'

describe('data adapter', () => {
  const currentLocalStorage = window.localStorage
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: vi.fn().mockImplementation(() => {
        let store = {}
        return {
          getItem(key) {
            return store[key] || null
          },
          setItem(key, value) {
            store[key] = value.toString()
          },

          removeItem(key) {
            delete store[key]
          },
          clear() {
            store = {}
          },
        }
      })(),
    })
  })

  afterAll(() => {
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: currentLocalStorage,
    })
  })

  it('should write settings to local storage', () => {
    const settings = { day: 1, hour: 2 }
    const hashedSettings = btoa(JSON.stringify(settings))
    const writeSpy = vi.spyOn(localStorage, 'setItem')
    writeSettings(settings)

    expect(writeSpy).toHaveBeenCalledOnce()
    expect(writeSpy).toHaveBeenCalledWith('settings', hashedSettings)
  })

  it('should read existing settings from local storage', () => {
    const settings = { day: 1, hour: 2 }
    const getSpy = vi.spyOn(localStorage, 'getItem')
    localStorage.clear('settings')
    localStorage.setItem('settings', btoa(JSON.stringify(settings)))
    const loadedSettings = loadSettings()

    expect(getSpy).toHaveBeenCalledOnce()
    expect(loadedSettings).toEqual(settings)
  })

  it('should read not existing settings from local storage', () => {
    const defaultSettings = {
      greetingsText: 'Have a beer!',
      day: 5,
      hour: 18,
      theme: 'light',
      useSystemTheme: false,
      isFirstLoad: true,
    }
    const hashedDefaultSettings = btoa(JSON.stringify(defaultSettings))
    const writeSpy = vi.spyOn(localStorage, 'setItem')
    const getSpy = vi.spyOn(localStorage, 'getItem')
    localStorage.clear('settings')
    const loadedSettings = loadSettings()

    expect(writeSpy).toHaveBeenCalledOnce()
    expect(writeSpy).toHaveBeenCalledWith('settings', hashedDefaultSettings)
    expect(getSpy).toHaveBeenCalledOnce()
    expect(loadedSettings).toEqual(defaultSettings)
  })
})
