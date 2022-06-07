import { loadSettings, writeSettings } from '@utils/dataAdapter'
import {
  writeToLocalstorage,
  readFromLocalstorage,
} from '@utils/localstorageAdapter'

jest.mock('@utils/localstorageAdapter', () => {
  const originalModule = jest.requireActual('@utils/localstorageAdapter')
  return {
    __esModule: true,
    ...originalModule,
    writeToLocalstorage: jest.fn(),
    readFromLocalstorage: jest.fn(() =>
      btoa(JSON.stringify({ day: 2, hour: 3 }))
    ),
  }
})

jest.mock('@utils/settings', () => {
  const originalModule = jest.requireActual('@utils/settings')
  return {
    __esModule: true,
    ...originalModule,
    getDefaultSettings: jest.fn(() => ({ day: 5, hour: 18 })),
  }
})

const mockedWriteToLocalstorage = jest.mocked(writeToLocalstorage)
const mockedReadFromLocalstorage = jest.mocked(readFromLocalstorage)

describe('dataAdapter', () => {
  beforeEach(() => {
    mockedWriteToLocalstorage.mockClear()
    mockedReadFromLocalstorage.mockClear()
  })

  it('should write settings', () => {
    const data = { day: 2, hour: 3 }
    writeSettings(data)
    expect(mockedWriteToLocalstorage).toHaveBeenCalledTimes(1)
  })

  it('should load settings', () => {
    const settings = loadSettings()
    expect(settings).toMatchObject({ day: 2, hour: 3 })
    expect(mockedWriteToLocalstorage).toHaveBeenCalledTimes(0)
    expect(mockedReadFromLocalstorage).toHaveBeenCalledTimes(1)
  })

  it('should load non existing settings', () => {
    readFromLocalstorage.mockImplementation(() => undefined)
    const settings = loadSettings()
    expect(settings).toMatchObject({ day: 5, hour: 18 })
    expect(mockedWriteToLocalstorage).toHaveBeenCalledTimes(1)
    expect(mockedReadFromLocalstorage).toHaveBeenCalledTimes(1)
  })
})
