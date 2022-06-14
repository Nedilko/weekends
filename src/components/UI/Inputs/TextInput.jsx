import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

function TextInput({ placeholder, value, onChange }) {
  const ref = useRef(null)
  const [isValid, setIsValid] = useState(true)
  const [textValue, setTextValue] = useState(value)
  const handleChange = (e) => {
    setTextValue(e.target.value)
  }

  useEffect(() => {
    onChange(textValue)
    if (ref.current.value.trim() === '') {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [textValue, onChange])
  return (
    <input
      ref={ref}
      type="text"
      data-testid="greetings-text-input"
      placeholder={placeholder}
      maxLength="20"
      value={textValue}
      onChange={handleChange}
      className={`${
        !isValid ? 'border-red-500' : 'border-slate-100 focus:border-slate-300'
      } mx-2 flex rounded-md border px-2 text-xl font-thin text-slate-600 focus:outline-none dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-400 dark:focus:border-gray-500`}
    />
  )
}

export default TextInput
