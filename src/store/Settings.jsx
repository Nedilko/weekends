import React, { useReducer, useMemo } from 'react'
import PropTypes from 'prop-types'
import { loadSettings, writeSettings } from '@utils/dataAdapter'
import { getSystemTheme } from '@utils/settings'

const SettingsDataContext = React.createContext()
const SettingsDispatchContext = React.createContext()

const actualSettings = (settings) => {
  const actualTheme = settings.useSystemTheme
    ? getSystemTheme()
    : settings.theme
  return { ...settings, theme: actualTheme }
}

const settingsReducer = (state, action) => {
  switch (action.type) {
    case 'set': {
      const newSettings = action.payload
      writeSettings(newSettings)
      return { ...state, ...newSettings }
    }
    case 'setTheme': {
      const newSettings = { ...state, theme: action.payload }
      writeSettings(newSettings)
      return newSettings
    }
    case 'reset':
      return action.payload
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const SettingsContextProvider = ({ children }) => {
  const loadedSettings = useMemo(() => loadSettings(), [])
  const [state, dispatch] = useReducer(
    settingsReducer,
    loadedSettings,
    actualSettings
  )
  return (
    <SettingsDataContext.Provider value={state}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsDataContext.Provider>
  )
}

const useSettingsData = () => {
  const context = React.useContext(SettingsDataContext)
  if (context === undefined) {
    throw new Error(
      'useSettingsData must be used within a SettingsContextProvider'
    )
  }
  return context
}

const useSettingsDispatch = () => {
  const context = React.useContext(SettingsDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useSettingsDispatch must be used within a SettingsContextProvider'
    )
  }
  return context
}

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { SettingsContextProvider, useSettingsData, useSettingsDispatch }

// export const SettingsContextProvider = ({ children }) => {
//   const [settings, setSettings] = useState(() => {
//     const loadedSettings = loadSettings()
//     const actualTheme = loadedSettings.useSystemTheme
//       ? getSystemTheme()
//       : loadedSettings.theme
//     return {
//       ...loadedSettings,
//       theme: actualTheme,
//     }
//   })
//   const handleApply = (data) => {
//     setSettings((oldSettings) => {
//       const newSettings = {
//         ...oldSettings,
//         ...data,
//       }
//       writeSettings(newSettings)
//       return {
//         ...newSettings,
//       }
//     })
//   }

//   return (
//     <SettingsContext.Provider value={{ data: settings, handleApply }}>
//       {children}
//     </SettingsContext.Provider>
//   )
// }

// SettingsContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default SettingsContext
