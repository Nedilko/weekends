import { useEffect, useState, useContext } from 'react'
import ToggleTheme from '@UI/Toggles/ToggleTheme'
import SettingsContext from '@store/Settings'
import { getSystemTheme, applyTheme } from '@utils/settings'

function DarkModeSwitcher() {
  const settings = useContext(SettingsContext)
  const { useSystemTheme, theme } = settings.data
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (useSystemTheme) return getSystemTheme() === 'dark'
    return theme === 'dark'
  })

  const handleToggleTheme = () => {
    settings.handleApply({ theme: isDarkMode ? 'light' : 'dark' })
  }

  useEffect(() => {
    const currentTheme = useSystemTheme ? getSystemTheme() : theme
    setIsDarkMode(currentTheme === 'dark')
    applyTheme(currentTheme)
  }, [theme, useSystemTheme])

  return (
    <>
      {!useSystemTheme && (
        <ToggleTheme isChecked={isDarkMode} onClick={handleToggleTheme} />
      )}
    </>
  )
}

export default DarkModeSwitcher
