import PropTypes from 'prop-types'
import { useState } from 'react'

import Modal from './Modal'
import SettingsModalRow from './SettingsModalRow'
import TextInput from '../Inputs/TextInput'
import NumberInput from '../Inputs/NumberInput'
import Toggle from '../Toggles/Toggle'
import Dropdown from '../Inputs/Dropdown'

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

  const items = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const [selectedItem, setSelecteditem] = useState(items[4])

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
            value={selectedItem}
            items={items}
            label="Day"
            onChange={(value) => {
              setSelecteditem(value)
            }}
          />
        </SettingsModalRow>
        <SettingsModalRow>
          <div className="flex w-1/2">Day</div>
          <NumberInput
            placeholder="5"
            value={Number(day)}
            min={1}
            max={6}
            onChange={setDay}
          />
        </SettingsModalRow>
        <SettingsModalRow>
          <div className="flex w-1/2">Hour</div>
          <NumberInput
            placeholder="18"
            value={Number(hour)}
            min={0}
            max={23}
            onChange={setHour}
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
