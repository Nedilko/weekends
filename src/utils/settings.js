const DEAFULT_FRIDAY = {
  day: 5,
  hour: 18,
  minute: 0,
  second: 0,
}

const DEFAULT_THEME = 'light'

const getDefaultSettings = () => ({
  greetingsText: 'Have a beer!',
  day: DEAFULT_FRIDAY.day,
  hour: DEAFULT_FRIDAY.hour,
  theme: DEFAULT_THEME,
  useSystemTheme: false,
  isFirstLoad: true,
})

const getTimerData = (friday) => ({
  days: friday.day,
  hours: friday.hour,
  minutes: DEAFULT_FRIDAY.minute,
  seconds: DEAFULT_FRIDAY.second,
})

const getSystemTheme = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

const applyTheme = (theme) => {
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export {
  DEAFULT_FRIDAY,
  getTimerData,
  getDefaultSettings,
  getSystemTheme,
  applyTheme,
}
