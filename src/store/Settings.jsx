import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getDefaultSettings } from '@utils/settings'

const SettingsContext = React.createContext({
  settings: getDefaultSettings(),
  setSettings: () => {},
})

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

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState(loadSettings())

  const handleApply = (newSettings) => {
    setSettings((oldSettings) => {
      const mergedSettings = { ...oldSettings, ...newSettings }
      writeSettings(mergedSettings)

      return mergedSettings
    })
  }

  return (
    <SettingsContext.Provider value={{ data: settings, handleApply }}>
      {children}
    </SettingsContext.Provider>
  )
}

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SettingsContext
