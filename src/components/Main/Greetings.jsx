import PropTypes from 'prop-types'

Greetings.propTypes = {
  text: PropTypes.string.isRequired,
}

function Greetings({ text }) {
  return (
    <div className="mt-32 text-center text-7xl font-thin uppercase">{text}</div>
  )
}

export default Greetings
