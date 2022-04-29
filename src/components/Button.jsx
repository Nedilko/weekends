import PropTypes from 'prop-types'

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

function Button({ onClick, title }) {
  return (
    <button
      className="w-16 mx-4 py-2 font-thin text-xl hover:scale-110 duration-200 ease-in-out text-slate-600 dark:text-gray-400"
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
