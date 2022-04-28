import PropTypes from 'prop-types'

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

function Button({ onClick, title }) {
  return (
    <button
      className="bg-green-300 rounded-lg w-24 p-2 m-2 shadow-md"
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
