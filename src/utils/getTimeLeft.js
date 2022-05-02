import dayjs from 'dayjs'
import objectSupport from 'dayjs/plugin/objectSupport'
dayjs.extend(objectSupport)

const SECONDS_IN = {
  day: 86400,
  hour: 3600,
  minute: 60,
}

const getTimeLeft = (time) => {
  const secondsLeft = dayjs().set(time).diff(dayjs(), 'second')
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

const isFinished = (time) => Object.values(time).every((value) => value === 0)

export { getTimeLeft, isFinished }
