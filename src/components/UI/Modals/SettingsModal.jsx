import PropTypes from 'prop-types'
import { useContext, useState } from 'react'

import Modal from './Modal'
import SettingsModalRow from './SettingsModalRow'
import TextInput from '../Inputs/TextInput'
import Toggle from '../Toggles/Toggle'
import SettingsContext from '../../../store/Settings'

SettingsModal.propTypes = {
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

function SettingsModal({ title, settings, onApply, onCancel }) {
  const [greetingsText, setGeetingsText] = useState(settings.greetingsText)
  const [day, setDay] = useState(settings.day)
  const [hour, setHour] = useState(settings.hour)
  const [useSystemTheme, setuUseSystemTheme] = useState(settings.useSystemTheme)

  const ctx = useContext(SettingsContext)

  return (
    <Modal
      title={title}
      onApply={() =>
        onApply({
          greetingsText,
          day: Number(day),
          hour: Number(hour),
          useSystemTheme,
        })
      }
      onCancel={onCancel}
    >
      <section className="flex flex-col font-thin text-xl text-slate-600 dark:text-gray-400">
        <SettingsModalRow>
          <div className="flex">Greetings text</div>
          <TextInput
            placeholder={ctx.theme}
            value={greetingsText}
            onChange={setGeetingsText}
          />
        </SettingsModalRow>
        <SettingsModalRow>
          <div className="flex">Day</div>
          <TextInput placeholder="5" value={String(day)} onChange={setDay} />
        </SettingsModalRow>
        <SettingsModalRow>
          <div className="flex">Hour</div>
          <TextInput placeholder="18" value={String(hour)} onChange={setHour} />
        </SettingsModalRow>
        <SettingsModalRow>
          <div className="flex">Use system theme</div>
          <Toggle checked={useSystemTheme} onChange={setuUseSystemTheme} />
        </SettingsModalRow>
      </section>
    </Modal>
  )
}

export default SettingsModal
