import SettingsContext from '@store/Settings'
import { useContext } from 'react'

function Greetings() {
  const settings = useContext(SettingsContext)
  return (
    <div className="font-thin uppercase text-center text-7xl mt-32">
      {settings.data.greetingsText}
    </div>
  )
}

export default Greetings
