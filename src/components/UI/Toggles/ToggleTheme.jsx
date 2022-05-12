import PropTypes from 'prop-types'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

ToggleTheme.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

function ToggleTheme({ checked, onClick }) {
  return (
    <div className="flex items-center justify-center">
      <span
        onClick={onClick}
        className={`flex h-8 w-16 flex-shrink-0 items-center justify-between rounded-full ${
          checked ? 'bg-slate-700' : 'bg-gray-200'
        }`}
      >
        <MoonIcon
          className={`ml-1.5 h-5 w-5 rounded-full text-yellow-500 duration-300 ease-in-out ${
            checked ? '' : 'scale-0 opacity-0'
          }`}
        />
        <SunIcon
          className={`mr-1.5 h-5 w-5 rounded-full text-yellow-500 duration-300 ease-in-out ${
            checked ? 'scale-0 opacity-0' : ''
          }`}
        />
        <span
          className={`absolute ml-0.5 flex h-7 w-7 rounded-full text-yellow-500 shadow-md duration-300 ease-in-out ${
            checked ? 'translate-x-8 bg-slate-900' : 'bg-white'
          }`}
        ></span>
      </span>
    </div>
  )
}

export default ToggleTheme
