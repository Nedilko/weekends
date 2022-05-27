/* eslint-disable security/detect-object-injection */
import {
  writeToLocalstorage,
  readFromLocalstorage,
} from '@utils/localstorageAdapter'

describe('localstorage adapter', () => {
  let currentLocalStorage
  beforeAll(() => {
    currentLocalStorage = window.localStorage
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterAll(() => {
    console.error.mockRestore()
  })

  afterEach(() => {
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: currentLocalStorage,
    })
    console.error.mockClear()
  })

  it('should read settings from local storage', () => {
    const getItem = vi.fn().mockImplementation(() => 'sample')
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: {
        getItem,
      },
    })
    const data = readFromLocalstorage('settings')
    expect(getItem).toHaveBeenCalled()
    expect(getItem).toHaveBeenCalledWith('settings')
    expect(data).toMatch('sample')
  })

  it('should write settings to local storage', () => {
    const setItem = vi.fn()
    const data = { day: 2, hour: 3 }
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: {
        setItem,
      },
    })
    writeToLocalstorage('settings', data)
    expect(setItem).toHaveBeenCalled()
    expect(setItem).toHaveBeenCalledWith('settings', { day: 2, hour: 3 })
  })

  it('should throw error reading from localstorage', () => {
    const getItem = vi.fn().mockImplementation(() => {
      throw 'error message'
    })
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: {
        getItem,
      },
    })
    const data = readFromLocalstorage('settings')
    expect(getItem).toHaveBeenCalled()
    expect(getItem).toHaveBeenCalledWith('settings')
    expect(data).toBeUndefined()
    expect(console.error).toHaveBeenCalledOnce()
  })

  it('should throw error writing to localstorage', () => {
    const setItem = vi.fn().mockImplementation(() => {
      throw 'error message'
    })
    const data = { day: 2, hour: 3 }
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: {
        setItem,
      },
    })
    writeToLocalstorage('settings', data)
    expect(setItem).toHaveBeenCalled()
    expect(setItem).toHaveBeenCalledWith('settings', { day: 2, hour: 3 })
    expect(console.error).toHaveBeenCalledOnce()
  })
})
