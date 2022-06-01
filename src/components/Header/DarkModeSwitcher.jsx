import { useEffect, useState, useContext } from 'react'
import ToggleTheme from '@UI/Toggles/ToggleTheme'
import SettingsContext from '@store/Settings'

function DarkModeSwitcher() {
  const settings = useContext(SettingsContext)
  const { useSystemTheme, theme } = settings.data
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark')

  const handleToggleTheme = () => {
    settings.handleApply({ theme: isDarkMode ? 'light' : 'dark' })
  }

  useEffect(() => {
    setIsDarkMode(theme === 'dark')
  }, [theme])

  return (
    <>
      {!useSystemTheme && (
        <ToggleTheme isChecked={isDarkMode} onClick={handleToggleTheme} />
      )}
    </>
  )
}

export default DarkModeSwitcher
