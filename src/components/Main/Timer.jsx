import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import Clock from '@components/Clock/Clock'
import SettingsContext from '@store/Settings'
import { getTimerData } from '@utils/settings'
import { getTimeLeft, isFinished } from '@utils/getTimeLeft'
import Actiontext from '@components/Main/ActionText'

Timer.propTypes = {
  onFinish: PropTypes.func,
}

function Timer({ onFinish }) {
  const settings = useContext(SettingsContext)
  const [time, setTime] = useState(getTimeLeft(getTimerData(settings.data)))

  useEffect(() => {
    if (isFinished(time)) {
      onFinish(true)
    }
    const interval = setInterval(() => {
      setTime(getTimeLeft(getTimerData(settings.data)))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [time])

  return (
    <div className="mt-20 flex flex-col items-center">
      <Actiontext />
      <Clock time={time} />
    </div>
  )
}

export default Timer
