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
      className="mx-2 flex rounded-md border border-gray-300 px-2 text-xl font-thin text-slate-600 focus:border-slate-500 focus:ring-slate-500 dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-400"
    />
  )
}

export default NumberInput
