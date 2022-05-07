import PropTypes from 'prop-types'
import { useContext, useEffect } from 'react'
import { getTimerData } from '@utils/settings'
import Clock from '@components/Clock/Clock'
import SettingsContext from '@store/Settings'
import useCountdown from '@hooks/useCountdown'
import { isFinished } from '@utils/getTimeLeft'
import Actiontext from '@components/Main/ActionText'

Timer.propTypes = {
  onFinish: PropTypes.func.isRequired,
}

function Timer({ onFinish }) {
  const settings = useContext(SettingsContext)

  const time = useCountdown(getTimerData(settings.data))

  useEffect(() => {
    if (isFinished(time)) {
      onFinish(true)
    }
  }, [time])

  return (
    <div className="flex flex-col mt-20 items-center">
      <Actiontext />
      <Clock time={time} />
    </div>
  )
}

export default Timer
