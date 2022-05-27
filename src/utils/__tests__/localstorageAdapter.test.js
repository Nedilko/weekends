import {
  writeToLocalstorage,
  readFromLocalstorage,
} from '@utils/localstorageAdapter'

describe('localstorage adapter', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: {
        setItem: vi.fn(),
        getItem: vi.fn(() => 'sample'),
      },
    })
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterAll(() => {
    console.error.mockRestore()
  })

  afterEach(() => {
    window.localStorage.setItem.mockClear()
    window.localStorage.getItem.mockClear()
    console.error.mockClear()
  })

  it('should read settings from local storage', () => {
    const getItem = window.localStorage.getItem
    const data = readFromLocalstorage('settings')
    expect(getItem).toHaveBeenCalled()
    expect(getItem).toHaveBeenCalledWith('settings')
    expect(data).toMatch('sample')
  })

  it('should write settings to local storage', () => {
    const setItem = window.localStorage.setItem
    const data = { day: 2, hour: 3 }
    writeToLocalstorage('settings', data)
    expect(setItem).toHaveBeenCalled()
    expect(setItem).toHaveBeenCalledWith('settings', { day: 2, hour: 3 })
  })

  it('should throw error reading from localstorage', () => {
    const getItem = window.localStorage.getItem.mockImplementation(() => {
      throw 'error message'
    })
    const data = readFromLocalstorage('settings')
    expect(getItem).toHaveBeenCalled()
    expect(getItem).toHaveBeenCalledWith('settings')
    expect(data).toBeUndefined()
    expect(console.error).toHaveBeenCalledOnce()
  })

  it('should throw error writing to localstorage', () => {
    const setItem = window.localStorage.setItem.mockImplementation(() => {
      throw 'error message'
    })
    const data = { day: 2, hour: 3 }
    writeToLocalstorage('settings', data)
    expect(setItem).toHaveBeenCalled()
    expect(setItem).toHaveBeenCalledWith('settings', { day: 2, hour: 3 })
    expect(console.error).toHaveBeenCalledOnce()
  })
})
