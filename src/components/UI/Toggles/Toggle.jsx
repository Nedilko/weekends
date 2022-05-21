import PropTypes from 'prop-types'

Toggle.propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

function Toggle({ label, isChecked, onClick }) {
  return (
    <label className="flex items-center px-1 text-xl font-thin text-slate-600 dark:text-gray-400">
      {label}
      <span
        role="checkbox"
        onClick={onClick}
        className={`ml-4 flex h-6 w-12 flex-shrink-0 items-center justify-between rounded-full px-1 duration-300 ease-in-out ${
          isChecked
            ? 'bg-green-400 dark:bg-green-600'
            : 'bg-gray-200 dark:bg-slate-700'
        }`}
      >
        <span
          className={`absolute flex h-5 w-5 rounded-full bg-white text-yellow-500 shadow-md duration-300 ease-in-out dark:bg-slate-900 ${
            isChecked ? 'translate-x-5' : ''
          }`}
        ></span>
      </span>
    </label>
  )
}

export default Toggle
