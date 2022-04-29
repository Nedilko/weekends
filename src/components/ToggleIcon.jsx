import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

ToggleIcon.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

function ToggleIcon({ label, checked = false, onChange }) {
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
          isChecked ? 'bg-slate-700' : 'bg-gray-200'
        }`}
      >
        <MoonIcon
          className={`w-5 h-5 ml-1 rounded-full text-yellow-500 duration-300 ease-in-out ${
            isChecked ? '' : 'opacity-0 scale-0'
          }`}
        />
        <SunIcon
          className={`w-5 h-5 mr-1 rounded-full text-yellow-500 duration-300 ease-in-out ${
            isChecked ? 'opacity-0 scale-0' : ''
          }`}
        />
        <span
          className={`absolute flex h-7 w-7 rounded-full text-yellow-500 p-1 shadow-md duration-300 ease-in-out ${
            isChecked ? 'translate-x-7 bg-slate-900' : 'bg-white'
          }`}
        ></span>
      </span>
    </label>
  )
}

export default ToggleIcon
