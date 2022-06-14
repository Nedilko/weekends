import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { loadSettings, writeSettings } from '@utils/dataAdapter'
import { getSystemTheme } from '@utils/settings'

const SettingsContext = React.createContext()

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const loadedSettings = loadSettings()
    const actualTheme = loadedSettings.useSystemTheme
      ? getSystemTheme()
      : loadedSettings.theme
    return {
      ...loadedSettings,
      theme: actualTheme,
    }
  })
  const handleApply = (data) => {
    setSettings((oldSettings) => {
      const newSettings = {
        ...oldSettings,
        ...data,
      }
      writeSettings(newSettings)
      return {
        ...newSettings,
      }
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
