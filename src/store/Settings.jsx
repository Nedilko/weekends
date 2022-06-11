import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { loadSettings, writeSettings } from '@utils/dataAdapter'
import { getSystemTheme } from '@utils/settings'

const SettingsContext = React.createContext()

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState(loadSettings())
  const handleApply = (newSettings) => {
    setSettings((oldSettings) => {
      const currentTheme = newSettings.useSystemTheme
        ? getSystemTheme()
        : newSettings.theme

      const mergedSettings = {
        ...oldSettings,
        ...newSettings,
        theme: currentTheme,
      }
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
