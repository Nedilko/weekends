import PropTypes from 'prop-types'
import { useState } from 'react'

import Modal from './Modal'
import SettingsModalRow from './SettingsModalRow'
import TextInput from '../Inputs/TextInput'
import Toggle from '../Toggles/Toggle'
import Dropdown from '../Dropdown/Dropdown'
import { getDay, getHour, DAYS, HOURS } from '@utils/convertTime'

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

  return (
    <Modal
      title={title}
      onApply={() =>
        onApply({
          greetingsText,
          day,
          hour,
          useSystemTheme,
        })
      }
      onCancel={onCancel}
    >
      <section className="flex flex-col text-xl font-thin text-slate-600 dark:text-gray-400">
        <SettingsModalRow>
          <div className="flex w-1/2">Greetings text</div>
          <TextInput
            placeholder="Have a beer"
            value={greetingsText}
            onChange={setGeetingsText}
          />
        </SettingsModalRow>
        <SettingsModalRow>
          <Dropdown
            value={DAYS[day - 1]}
            items={DAYS}
            label="Day"
            onChange={(value) => setDay(getDay(value))}
          />
          <Dropdown
            value={HOURS[+hour]}
            items={HOURS}
            label="Hour"
            onChange={(value) => setHour(getHour(value))}
          />
        </SettingsModalRow>
        <SettingsModalRow>
          <div className="flex w-1/2">Use system theme</div>
          <Toggle checked={useSystemTheme} onChange={setuUseSystemTheme} />
        </SettingsModalRow>
      </section>
    </Modal>
  )
}

export default SettingsModal
