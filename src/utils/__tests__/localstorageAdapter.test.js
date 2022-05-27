import {
  writeToLocalstorage,
  readFromLocalstorage,
} from '@utils/localstorageAdapter'

describe('localstorage adapter', () => {
  let setItemSpy, getItemSpy
  beforeAll(() => {
    setItemSpy = vi.spyOn(global.Storage.prototype, 'setItem')
    vi.spyOn(console, 'error').mockImplementation(() => {})
    getItemSpy = vi.spyOn(global.Storage.prototype, 'getItem')
  })

  beforeEach(() => {
    setItemSpy.mockImplementation(() => {})
    getItemSpy.mockImplementation(() => 'sample')
  })

  afterAll(() => {
    console.error.mockRestore()
    getItemSpy.mockRestore()
    setItemSpy.mockRestore()
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

  it('should throw error reading from localstorage', () => {
    getItemSpy.mockImplementation(() => {
      throw 'error message'
    })
    const data = readFromLocalstorage('settings')
    expect(getItemSpy).toHaveBeenCalled()
    expect(getItemSpy).toHaveBeenCalledWith('settings')
    expect(data).toBeUndefined()
    expect(console.error).toHaveBeenCalledOnce()
  })

  it('should throw error writing to localstorage', () => {
    setItemSpy.mockImplementation(() => {
      throw 'error message'
    })
    const data = { day: 2, hour: 3 }
    writeToLocalstorage('settings', data)
    expect(setItemSpy).toHaveBeenCalled()
    expect(setItemSpy).toHaveBeenCalledWith('settings', { day: 2, hour: 3 })
    expect(console.error).toHaveBeenCalledOnce()
  })
})
