import { useEffect, useState } from 'react'
import ToggleTheme from '@UI/Toggles/ToggleTheme'
import { useSettingsData, useSettingsDispatch } from '@store/Settings'
import { getSystemTheme, applyTheme } from '@utils/settings'

function DarkModeSwitcher() {
  const settings = useSettingsData()
  const dispatch = useSettingsDispatch()
  const { useSystemTheme, theme } = settings
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (useSystemTheme) return getSystemTheme() === 'dark'
    return theme === 'dark'
  })

  useEffect(() => {
    const currentTheme = useSystemTheme ? getSystemTheme() : theme
    setIsDarkMode(currentTheme === 'dark')
    applyTheme(currentTheme)
  }, [theme, useSystemTheme])

  return (
    <>
      {!useSystemTheme && (
        <ToggleTheme
          isChecked={isDarkMode}
          onClick={() =>
            dispatch({
              type: 'setTheme',
              payload: isDarkMode ? 'light' : 'dark',
            })
          }
        />
      )}
    </>
  )
}

export default DarkModeSwitcher
