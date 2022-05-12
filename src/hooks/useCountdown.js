import { useState, useEffect } from 'react'
import { getTimeLeft } from '@utils/getTimeLeft'

const useCountdown = (targetTime) => {
  const timeLeft = getTimeLeft(targetTime)
  const [time, setTime] = useState(timeLeft)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeLeft)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [timeLeft])

  return time
}

export default useCountdown
