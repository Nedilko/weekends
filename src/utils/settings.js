const DEAFULT_FRIDAY = {
  day: 0,
  hour: 17,
  minute: 59,
  second: 59,
}

const getDefaultSettings = () => ({
  greetingsText: 'Have a beer!',
  day: DEAFULT_FRIDAY.day,
  hour: DEAFULT_FRIDAY.hour,
})

const getTimerData = (friday) => ({
  days: friday.day,
  hours: friday.hour,
  minutes: DEAFULT_FRIDAY.minute,
  seconds: DEAFULT_FRIDAY.second,
})

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
  const localStorData = localStorage.getItem('settings')
  if (!localStorData) {
    localStorage.setItem(
      'settings',
      btoa(JSON.stringify({ ...getDefaultSettings() }))
    )
    return getDefaultSettings()
  }
  return JSON.parse(atob(localStorData))
}

const setSettings = (settings) => {
  return localStorage.setItem('settings', btoa(JSON.stringify(settings)))
}

export {
  DEAFULT_FRIDAY,
  getSettings,
  setSettings,
  getTheme,
  saveTheme,
  getTimerData,
}
