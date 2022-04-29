import PropTypes from 'prop-types'

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

function TextInput({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      maxLength="20"
      value={value}
      onChange={(e) => {
        onChange(e.target.value)
      }}
      className="flex focus:ring-slate-500 focus:border-slate-500 border-gray-300 border rounded-md mx-2 px-2 font-thin text-xl text-slate-600 dark:text-gray-400"
    />
  )
}

export default TextInput
