import PropTypes from 'prop-types'
import { useEffect } from 'react'
import Clock from '@components/Clock/Clock'
import { useSettingsData } from '@store/Settings'
import { getTimerData } from '@utils/settings'
import { isFinished } from '@utils/getTimeLeft'
import Actiontext from '@components/Main/ActionText'
import useCountdown from '@hooks/useCountdown'

Timer.propTypes = {
  onFinish: PropTypes.func,
}

function Timer({ onFinish }) {
  const settings = useSettingsData()
  const time = useCountdown(getTimerData(settings))

  useEffect(() => {
    if (isFinished(time)) {
      onFinish(true)
    }
  }, [time, onFinish])

  return (
    <div className="mt-20 flex flex-col items-center">
      <Actiontext />
      <Clock time={time} />
    </div>
  )
}

export default Timer
