import PropTypes from 'prop-types'

Digit.propTypes = {
  digit: PropTypes.number.isRequired,
}

function Digit({ digit }) {
  return (
    <div className="flex h-20 font-thin justify-center items-center text-5xl">
      {digit}
    </div>
  )
}

export default Digit
