import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'
import SettingsModalRow from './SettingsModalRow'
import TextInput from '../Inputs/TextInput'
import Toggle from '../Toggles/Toggle'
import { getSettings } from '../../../utils/settings'

SettingsModal.propTypes = {
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
}

function SettingsModal({ onApply, onCancel }) {
  const [settings, setSettings] = useState(getSettings())
  const [greetingsText, setGeetingsText] = useState(settings.greetingsText)
  const [day, setDay] = useState(settings.day)
  const [hour, setHour] = useState(settings.hour)
  useEffect(() => {
    setSettings({ greetingsText, day: Number(day), hour: Number(hour) })
  }, [greetingsText, day, hour])

  return ReactDOM.createPortal(
    <Modal
      title="Settings"
      onApply={() =>
        onApply({ greetingsText, day: Number(day), hour: Number(hour) })
      }
      onCancel={onCancel}
    >
      <section className="flex flex-col font-thin text-xl text-slate-600 dark:text-gray-400">
        <SettingsModalRow>
          <div className="flex">Greetings text</div>
          <TextInput
            placeholder="Have a beer!"
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
          <Toggle checked={false} onChange={() => {}} />
        </SettingsModalRow>
      </section>
    </Modal>,
    document.getElementById('modal-root')
  )
}

export default SettingsModal
