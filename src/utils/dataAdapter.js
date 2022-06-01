import { getDefaultSettings } from '@utils/settings'
import {
  writeToLocalstorage,
  readFromLocalstorage,
} from '@utils/localstorageAdapter'

const loadSettings = () => {
  const localStorData = readFromLocalstorage('settings')
  if (!localStorData) {
    writeSettings(getDefaultSettings())
    return getDefaultSettings()
  }
  return JSON.parse(atob(localStorData))
}

const writeSettings = (settings) => {
  writeToLocalstorage('settings', btoa(JSON.stringify(settings)))
}

export { loadSettings, writeSettings }
