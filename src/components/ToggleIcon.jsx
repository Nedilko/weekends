import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

ToggleIcon.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

function ToggleIcon({ label, checked = false, onChange }) {
  const [isChecked, setIsChecked] = useState(checked)
  const handleClick = () => {
    setIsChecked((prevIsChecked) => {
      const newIsChecked = !prevIsChecked
      return newIsChecked
    })
  }

  useEffect(() => {
    onChange(isChecked)
  })

  return (
    <label className="flex items-center p-2 text-xl font-thin text-slate-600 dark:text-gray-400">
      {label}
      <span
        onClick={handleClick}
        className={`flex w-14 h-8 items-center flex-shrink-0 ml-4 p-1 rounded-full duration-300 ease-in-out ${
          isChecked ? 'bg-slate-700' : 'bg-gray-300'
        }`}
      >
        <span
          className={`relative flex h-7 w-7 rounded-full text-yellow-500 p-1 shadow-md duration-300 ease-in-out ${
            isChecked ? 'translate-x-5 bg-slate-900' : 'bg-white'
          }`}
        >
          <SunIcon
            className={`w-5 h-5 absolute left-1 top-1 rounded-full text-yellow-500 duration-300 ease-in-out ${
              isChecked ? 'opacity-0 scale-0' : ''
            }`}
          />
          <MoonIcon
            className={`w-5 h-5 absolute left-1.4 top-0.6 rounded-full text-yellow-500 duration-300 ease-in-out ${
              isChecked ? '' : 'opacity-0 scale-0'
            }`}
          />
        </span>
      </span>
    </label>
  )
}

export default ToggleIcon
