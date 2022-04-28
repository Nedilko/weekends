import PropTypes from 'prop-types'
import { useState } from 'react'

Toggle.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
}

function Toggle({ label, checked = false }) {
  const [isChecked, setIsChecked] = useState(checked)
  const handleChange = (e) => {
    setIsChecked(e.target.checked)
  }
  return (
    <label className="relative flex items-center group p-2 text-xl font-thin text-slate-600 dark:text-gray-400">
      {label}
      <input
        type="checkbox"
        checked={isChecked}
        onClick={handleChange}
        className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
      />
      <span className="w-11 h-6 flex items-center flex-shrink-0 ml-3 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-slate-500 after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4 group-hover:after:translate-x-0.5"></span>
    </label>
  )
}

export default Toggle
