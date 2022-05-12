import PropTypes from 'prop-types'
import { useState } from 'react'

import Modal from './Modal'
import ModalRow from './ModalRow'
import TextInput from '../Inputs/TextInput'
import Toggle from '../Toggles/Toggle'
import DayDropdown from '../Dropdown/DayDropdown'
import HourDropdown from '../Dropdown/HourDropdown'

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

  const handleApply = () => {
    if (greetingsText.length > 0) {
      onApply({
        greetingsText,
        day,
        hour,
        useSystemTheme,
      })
    }
  }

  return (
    <Modal title={title} onApply={handleApply} onCancel={onCancel}>
      <section className="flex flex-col border-y py-2 text-xl font-thin text-slate-600 dark:text-gray-400">
        <ModalRow>
          <div className="flex w-1/2">Greetings text</div>
          <TextInput
            placeholder="Have a beer"
            value={greetingsText}
            onChange={setGeetingsText}
          />
        </ModalRow>
        <ModalRow>
          <DayDropdown selectedValue={day} onChange={setDay} />
          <HourDropdown selectedValue={hour} onChange={setHour} />
        </ModalRow>
        <ModalRow>
          <div className="flex w-1/2">Use system theme</div>
          <Toggle checked={useSystemTheme} onChange={setuUseSystemTheme} />
        </ModalRow>
      </section>
    </Modal>
  )
}

export default SettingsModal
