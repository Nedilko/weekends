const DEFAULT_FRIDAY = {
  day: 5,
  hour: 18,
  minute: 0,
  second: 0,
}

const DEFAULT_THEME = 'light'

const getDefaultSettings = () => ({
  greetingsText: 'Have a beer!',
  day: DEFAULT_FRIDAY.day,
  hour: DEFAULT_FRIDAY.hour,
  theme: DEFAULT_THEME,
  useSystemTheme: false,
  isFirstLoad: true,
})

const getTimerData = (friday) => ({
  days: friday.day,
  hours: friday.hour,
  minutes: DEFAULT_FRIDAY.minute,
  seconds: DEFAULT_FRIDAY.second,
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

export { getTimerData, getDefaultSettings, getSystemTheme, applyTheme }
