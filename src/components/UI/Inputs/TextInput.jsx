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
      className="mx-2 flex rounded-md border border-slate-100 px-2 text-xl font-thin text-slate-600 focus:border-slate-300 focus:outline-none dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-400 dark:focus:border-gray-500"
    />
  )
}

export default TextInput
