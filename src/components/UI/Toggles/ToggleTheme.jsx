import PropTypes from 'prop-types'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

ToggleTheme.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

function ToggleTheme({ checked, onClick }) {
  return (
    <div className="flex justify-center items-center">
      <span
        onClick={onClick}
        className={`flex justify-between items-center w-16 h-8 flex-shrink-0 rounded-full ${
          checked ? 'bg-slate-700' : 'bg-gray-200'
        }`}
      >
        <MoonIcon
          className={`w-5 h-5 ml-1.5 rounded-full text-yellow-500 duration-300 ease-in-out ${
            checked ? '' : 'opacity-0 scale-0'
          }`}
        />
        <SunIcon
          className={`w-5 h-5 mr-1.5 rounded-full text-yellow-500 duration-300 ease-in-out ${
            checked ? 'opacity-0 scale-0' : ''
          }`}
        />
        <span
          className={`absolute flex h-7 w-7 ml-0.5 rounded-full text-yellow-500 shadow-md duration-300 ease-in-out ${
            checked ? 'translate-x-8 bg-slate-900' : 'bg-white'
          }`}
        ></span>
      </span>
    </div>
  )
}

export default ToggleTheme
