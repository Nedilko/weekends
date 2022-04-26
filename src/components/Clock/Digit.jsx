import PropTypes from 'prop-types'

Digit.propTypes = {
  digit: PropTypes.number.isRequired,
}

function Digit({ digit }) {
  return <div className="text-5xl">{digit}</div>
}

export default Digit
