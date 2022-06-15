import {
  writeToLocalstorage,
  readFromLocalstorage,
} from '@utils/localstorageAdapter'

describe('localstorage adapter', () => {
  let setItemSpy, getItemSpy
  beforeAll(() => {
    setItemSpy = vi.spyOn(global.Storage.prototype, 'setItem')
    getItemSpy = vi.spyOn(global.Storage.prototype, 'getItem')
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  beforeEach(() => {
    setItemSpy.mockImplementation(() => {})
    getItemSpy.mockImplementation(() => 'sample')
  })

  afterAll(() => {
    getItemSpy.mockRestore()
    setItemSpy.mockRestore()
    console.error.mockRestore()
  })

  afterEach(() => {
    getItemSpy.mockClear()
    setItemSpy.mockClear()
    console.error.mockClear()
  })

  it('should read settings from local storage', () => {
    const data = readFromLocalstorage('settings')
    expect(getItemSpy).toHaveBeenCalled()
    expect(getItemSpy).toHaveBeenCalledWith('settings')
    expect(data).toMatch('sample')
  })

  it('should write settings to local storage', () => {
    const data = { day: 2, hour: 3 }
    writeToLocalstorage('settings', data)
    expect(setItemSpy).toHaveBeenCalled()
    expect(setItemSpy).toHaveBeenCalledWith('settings', { day: 2, hour: 3 })
  })

  it('should show console error on reading from localstorage', () => {
    getItemSpy.mockImplementation(() => {
      throw 'error message'
    })
    const data = readFromLocalstorage('settings')
    expect(getItemSpy).toHaveBeenCalled()
    expect(getItemSpy).toHaveBeenCalledWith('settings')
    expect(data).toBeUndefined()
    expect(console.error).toHaveBeenCalledTimes(1)
  })

  it('should show console error on writing to localstorage', () => {
    setItemSpy.mockImplementation(() => {
      throw 'error message'
    })
    const data = { day: 2, hour: 3 }
    writeToLocalstorage('settings', data)
    expect(setItemSpy).toHaveBeenCalled()
    expect(setItemSpy).toHaveBeenCalledWith('settings', { day: 2, hour: 3 })
    expect(console.error).toHaveBeenCalledTimes(1)
  })
})
