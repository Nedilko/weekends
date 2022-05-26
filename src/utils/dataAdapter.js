import { getDefaultSettings } from '@utils/settings'

const loadSettings = () => {
  const localStorData = localStorage.getItem('settings')
  if (!localStorData) {
    writeSettings(getDefaultSettings())
    return getDefaultSettings()
  }
  return JSON.parse(atob(localStorData))
}

const writeSettings = (settings) => {
  return localStorage.setItem('settings', btoa(JSON.stringify(settings)))
}

export { loadSettings, writeSettings }
