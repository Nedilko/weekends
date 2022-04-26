import dayjs from 'dayjs'
import objectSupport from 'dayjs/plugin/objectSupport'
dayjs.extend(objectSupport)

const FRIDAY = {
  day: 4,
  hour: 17,
  minute: 59,
  second: 59,
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
  return {
    days,
    hours: hours - days * 24,
    minutes: minutes - hours * 60,
    seconds: secondsLeft - minutes * 60,
  }
}

const isFriday = (friday) => Object.values(friday).every((value) => value === 0)

export { getTimeLeft, isFriday }
