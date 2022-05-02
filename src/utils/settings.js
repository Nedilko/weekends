const DEAFULT_FRIDAY = {
  day: 5,
  hour: 17,
  minute: 59,
  second: 59,
}

const DEFAULT_THEME = 'light'

const getDefaultSettings = () => ({
  greetingsText: 'Have a beer!',
  day: DEAFULT_FRIDAY.day,
  hour: DEAFULT_FRIDAY.hour,
  theme: DEFAULT_THEME,
  useSystemTheme: false,
})

const getTimerData = (friday) => ({
  days: friday.day,
  hours: friday.hour,
  minutes: DEAFULT_FRIDAY.minute,
  seconds: DEAFULT_FRIDAY.second,
})

export { DEAFULT_FRIDAY, getTimerData, getDefaultSettings }
