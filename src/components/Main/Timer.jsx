import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getTimeLeft, isFriday } from '../../utils/getTimeLeft'
import Clock from './../Clock/Clock'

Timer.propTypes = {
  isFinishedHandler: PropTypes.func.isRequired,
}

function Timer({ isFinishedHandler }) {
  const [time, setTime] = useState(getTimeLeft())
  const [timerFinished, setTimerFinished] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setTimerFinished(isFriday(time))
  }, [time])

  useEffect(() => {
    if (timerFinished) {
      isFinishedHandler(true)
    }
  }, [timerFinished])

  return <Clock time={time} />
}

export default Timer
