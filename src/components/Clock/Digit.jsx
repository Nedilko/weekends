import PropTypes from 'prop-types'

Digit.propTypes = {
  digit: PropTypes.number.isRequired,
}

function Digit({ digit }) {
  return (
    <div className="flex h-20 items-center justify-center text-5xl font-thin">
      {digit}
    </div>
  )
}

export default Digit
