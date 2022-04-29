import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

Toggle.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

function Toggle({ label, checked = false, onChange }) {
  const [isChecked, setIsChecked] = useState(checked)
  const handleClick = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked)
  }

  useEffect(() => {
    onChange(isChecked)
  }, [isChecked])

  return (
    <label className="flex items-center p-2 text-xl font-thin text-slate-600 dark:text-gray-400">
      {label}
      <span
        onClick={handleClick}
        className={`flex justify-between w-16 h-8 items-center flex-shrink-0 ml-4 p-1 rounded-full duration-300 ease-in-out ${
          isChecked
            ? 'bg-green-400 dark:bg-green-600'
            : 'bg-gray-200 dark:bg-slate-700'
        }`}
      >
        <span
          className={`absolute flex h-7 w-7 rounded-full text-yellow-500 p-1 shadow-md bg-white dark:bg-slate-900 duration-300 ease-in-out ${
            isChecked ? 'translate-x-7' : ''
          }`}
        ></span>
      </span>
    </label>
  )
}

export default Toggle
