import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { loadSettings, writeSettings } from '@utils/dataAdapter'

const SettingsContext = React.createContext()

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
