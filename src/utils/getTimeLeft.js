import dayjs from 'dayjs'
import objectSupport from 'dayjs/plugin/objectSupport'
dayjs.extend(objectSupport)
const FRIDAY = {
  day: 3,
  hour: 0,
  minute: 35,
  second: 30,
}

const SECONDS_IN = {
  day: 86400,
  hour: 3600,
  minute: 60,
}

const getTimeLeft = (friday = FRIDAY) => {
  const secondsLeft = dayjs().set(friday).diff(dayjs(), 'second')
  if (secondsLeft <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }
  const days = Math.trunc(secondsLeft / SECONDS_IN.day)
  const hours = Math.trunc(secondsLeft / SECONDS_IN.hour)
  const minutes = Math.trunc(secondsLeft / SECONDS_IN.minute)
  const seconds = Math.trunc(secondsLeft / SECONDS_IN.minute)
  return {
    days,
    hours,
    minutes,
    seconds,
  }
}

export default getTimeLeft
