import React, { useState, useEffect } from 'react'
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
  const [settings, setSettings] = useState(getDefaultSettings())

  useEffect(() => {
    setSettings(loadSettings())
  }, [])

  const applySettings = (newSettings) => {
    setSettings(newSettings)
    writeSettings(newSettings)
  }

  return (
    <SettingsContext.Provider
      value={{ data: settings, applySettings: applySettings }} //TODO: reafctor -> remove redundant applySettings
    >
      {children}
    </SettingsContext.Provider>
  )
}

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SettingsContext
