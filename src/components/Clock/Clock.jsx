import PropTypes from 'prop-types'
import Digitblock from './Digitblock'

Clock.propTypes = {
  time: PropTypes.shape({
    days: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
  }).isRequired,
}

function Clock({ time }) {
  return (
    <div className="flex flex-row justify-around items-center text-center mb-5 mt-5 mx-10 max-w-xs">
      {time.days !== 0 && (
        <Digitblock label="days" digit={time.days} separator=":" />
      )}
      {time.hours !== 0 && (
        <Digitblock label="hours" digit={time.hours} separator=":" />
      )}
      {time.minutes !== 0 && (
        <Digitblock label="minutes" digit={time.minutes} separator=":" />
      )}
      <Digitblock label="seconds" digit={time.seconds} />
    </div>
  )
}

export default Clock
