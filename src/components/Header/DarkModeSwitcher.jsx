import ToggleTheme from '../UI/Toggles/ToggleTheme'
import { useEffect, useState } from 'react'
import { getTheme, saveTheme } from '../../utils/settings'

function DarkModeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(getTheme())

  const applyTheme = (isDark) => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    saveTheme(isDark)
  }

  const handleToggleTheme = () => {
    setIsDarkMode(() => !isDarkMode)
    applyTheme(!isDarkMode)
  }

  useEffect(() => {
    applyTheme(isDarkMode)
  }, [isDarkMode])

  return <ToggleTheme checked={isDarkMode} onClick={handleToggleTheme} />
}

export default DarkModeSwitcher
