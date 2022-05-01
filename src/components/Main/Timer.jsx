import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getTimeLeft, isFriday } from '../../utils/getTimeLeft'
import { getTimerData } from '../../utils/settings'
import Clock from './../Clock/Clock'

Timer.propTypes = {
  isFinishedHandler: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
}

function Timer({ isFinishedHandler, settings }) {
  const timerData = getTimerData(settings)
  const [fridayTime] = useState(timerData)
  const [time, setTime] = useState(getTimeLeft(timerData))
  const [timerFinished, setTimerFinished] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => setTime(getTimeLeft(fridayTime)), 1000)
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
