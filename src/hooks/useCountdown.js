import { useState, useEffect } from 'react'
import { getTimeLeft } from '@utils/getTimeLeft'

const useCountdown = (targetTime) => {
  const [time, setTime] = useState(getTimeLeft(targetTime))

  useEffect(() => {
    const interval = setTimeout(() => {
      setTime(getTimeLeft(targetTime))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [time, targetTime])

  return time
}

export default useCountdown
