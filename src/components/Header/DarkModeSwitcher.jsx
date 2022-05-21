import { useEffect, useState, useContext } from 'react'
import ToggleTheme from '@UI/Toggles/ToggleTheme'
import SettingsContext from '@store/Settings'
import { getSystemTheme } from '@utils/settings'

function DarkModeSwitcher() {
  const settings = useContext(SettingsContext)
  const useSystemTheme = settings.data.useSystemTheme
  const currentTheme = useSystemTheme ? getSystemTheme() : settings.data.theme
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === 'dark')

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
  }

  useEffect(() => {
    applyTheme()
  }, [isDarkMode])

  return (
    <>
      {!useSystemTheme && (
        <ToggleTheme isChecked={isDarkMode} onClick={handleToggleTheme} />
      )}
    </>
  )
}

export default DarkModeSwitcher
