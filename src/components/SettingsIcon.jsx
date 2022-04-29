import PropTypes from 'prop-types'
import { CogIcon } from '@heroicons/react/outline'

SettingsIcon.propTypes = {
  onClick: PropTypes.func,
}

function SettingsIcon({ onClick }) {
  return (
    <div className="flex w-12 h-12 items-center justify-center flex-shrink-0 p-2 rounded-full duration-300 ease-in-out hover:rotate-45">
      <CogIcon
        onClick={onClick}
        className="flex w-8 h-8 absolute rounded-full text-slate-500 dark:text-gray-600"
      />
    </div>
  )
}

export default SettingsIcon
