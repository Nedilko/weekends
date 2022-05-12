import PropTypes from 'prop-types'

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

function Button({ onClick, title }) {
  return (
    <button
      className="mx-4 w-16 py-2 text-xl font-thin text-slate-600 duration-200 ease-in-out hover:scale-110 focus:scale-110 focus:outline-none dark:text-gray-400"
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
