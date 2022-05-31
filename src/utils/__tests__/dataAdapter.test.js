/* eslint-disable security/detect-object-injection */
import { loadSettings, writeSettings } from '@utils/dataAdapter'
import {
  writeToLocalstorage,
  readFromLocalstorage,
} from '@utils/localstorageAdapter'

vi.mock('@utils/localstorageAdapter', () => ({
  ...vi.importActual('@utils/localstorageAdapter'),
  writeToLocalstorage: vi.fn(),
  readFromLocalstorage: vi.fn(() => btoa(JSON.stringify({ day: 2, hour: 3 }))),
}))

vi.mock('@utils/settings', () => ({
  ...vi.importActual('@utils/settings'),
  getDefaultSettings: vi.fn(() => ({ day: 5, hour: 18 })),
}))

const mockedWriteToLocalstorage = vi.mocked(writeToLocalstorage)
const mockedReadFromLocalstorage = vi.mocked(readFromLocalstorage)

describe('dataAdapter', () => {
  beforeEach(() => {
    mockedWriteToLocalstorage.mockClear()
    mockedReadFromLocalstorage.mockClear()
  })

  it('should write settings', () => {
    const data = { day: 2, hour: 3 }
    writeSettings(data)
    expect(mockedWriteToLocalstorage).toHaveBeenCalledOnce()
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
