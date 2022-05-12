import PropTypes from 'prop-types'
import { useRef, useState } from 'react'

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

function TextInput({ placeholder, value, onChange }) {
  const ref = useRef(null)
  const [isValid, setIsValid] = useState(true)
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
    if (ref.current.value === '') {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }
  return (
    <input
      ref={ref}
      type="text"
      placeholder={placeholder}
      maxLength="20"
      value={value}
      onChange={handleChange}
      className={`${
        !isValid ? 'border-red-500' : 'border-slate-100 focus:border-slate-300'
      } mx-2 flex rounded-md border px-2 text-xl font-thin text-slate-600 focus:outline-none dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-400 dark:focus:border-gray-500`}
    />
  )
}

export default TextInput
