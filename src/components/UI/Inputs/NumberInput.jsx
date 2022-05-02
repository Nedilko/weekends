import PropTypes from 'prop-types'

NumberInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
}

function NumberInput({ placeholder, value, min, max, onChange }) {
  return (
    <input
      type="number"
      placeholder={placeholder}
      maxLength="20"
      value={value}
      min={min}
      max={max}
      onChange={(e) => {
        onChange(e.target.value)
      }}
      className="flex focus:ring-slate-500 focus:border-slate-500 border-gray-300 dark:border-gray-700 border rounded-md mx-2 px-2 font-thin text-xl text-slate-600 dark:text-gray-400 dark:bg-zinc-900"
    />
  )
}

export default NumberInput
