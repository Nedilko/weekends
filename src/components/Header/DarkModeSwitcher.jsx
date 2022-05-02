import ToggleTheme from '../UI/Toggles/ToggleTheme'
import { useEffect, useState, useContext } from 'react'
import SettingsContext from '@store/Settings'

function DarkModeSwitcher() {
  const settings = useContext(SettingsContext)
  const [isDarkMode, setIsDarkMode] = useState(settings.data.theme === 'dark')

  useEffect(() => {
    setIsDarkMode(settings.data.theme === 'dark')
  }, [settings.data.theme])

  const applyTheme = () => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    settings.handleApply({ theme: isDarkMode ? 'dark' : 'light' })
  }

  const handleToggleTheme = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode)
    applyTheme(!isDarkMode)
  }

  useEffect(() => {
    applyTheme()
  }, [isDarkMode])

  return <ToggleTheme checked={isDarkMode} onClick={handleToggleTheme} />
}

export default DarkModeSwitcher
