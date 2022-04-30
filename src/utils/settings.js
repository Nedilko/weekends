const saveTheme = (isDark) => {
  return localStorage.setItem('darkMode', isDark)
}

const getTheme = () => {
  const theme = localStorage.getItem('darkMode')
  if (!theme) {
    localStorage.setItem('darkMode', false)
    return false
  }
  return theme === 'true' ? true : false
}

const getSettings = () => {
  return {}
}

const setSettings = (settings) => {
  return settings
}

export { getSettings, setSettings, getTheme, saveTheme }
