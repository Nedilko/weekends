import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Modal from './Modal'
import SettingsModalRow from './SettingsModalRow'
import TextInput from '../Inputs/TextInput'
import Toggle from '../Toggles/Toggle'

SettingsModal.propTypes = {
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

const DEFAULT_SETTINGS = {
  greetingsText: 'Take your time!',
  name: 'John Doe',
  age: '42',
}

function SettingsModal({ onApply, onCancel }) {
  const [settings, setSettings] = useState({ ...DEFAULT_SETTINGS })
  const [greetingsText, setGeetingsText] = useState(settings.greetingsText)
  const [name, setName] = useState(settings.name)
  const [age, setAge] = useState(settings.age)
  useEffect(() => {
    setSettings({ greetingsText, name, age })
  }, [greetingsText, name, age])
  return (
    <Modal title="Settings" onApply={onApply} onCancel={onCancel}>
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
          <TextInput placeholder="5" value={name} onChange={setName} />
        </SettingsModalRow>
        <SettingsModalRow>
          <div className="flex">Hour</div>
          <TextInput placeholder="18" value={age} onChange={setAge} />
        </SettingsModalRow>
        <SettingsModalRow>
          <div className="flex">Use system theme</div>
          <Toggle checked={false} onChange={() => {}} />
        </SettingsModalRow>
      </section>
    </Modal>
  )
}

export default SettingsModal
