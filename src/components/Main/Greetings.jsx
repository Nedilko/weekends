import SettingsContext from '@store/Settings'
import { useContext } from 'react'

function Greetings() {
  const settings = useContext(SettingsContext)
  return (
    <div className="mt-32 text-center text-7xl font-thin uppercase">
      {settings.data.greetingsText}
    </div>
  )
}

export default Greetings
