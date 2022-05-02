import SettingsContext from '@store/Settings'
import { useContext } from 'react'

function Greetings() {
  const settings = useContext(SettingsContext)
  return (
    <div className="font-thin uppercase text-center text-slate-600 dark:text-gray-400 text-7xl mb-10 mt-10">
      {settings.data.greetingsText}
    </div>
  )
}

export default Greetings
