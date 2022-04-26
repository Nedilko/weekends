import PropTypes from 'prop-types'

Digit.propTypes = {
  digit: PropTypes.string.isRequired,
}

function Digit({ digit }) {
  return <div>{digit}</div>
}

export default Digit
