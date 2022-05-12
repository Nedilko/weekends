import PropTypes from 'prop-types'
import Modal from './Modal'
import DayDropdown from '../Dropdown/DayDropdown'
import HourDropdown from '../Dropdown/HourDropdown'
import { useState } from 'react'

StartupModal.propTypes = {
  onApply: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

function StartupModal({ title, settings, onApply }) {
  const [day, setDay] = useState(settings.day)
  const [hour, setHour] = useState(settings.hour)

  return (
    <Modal
      title={title}
      onApply={() => onApply({ day, hour })}
      isButtonsCentered={true}
      isHeadingCentered={true}
    >
      <div className="flex flex-col font-thin">
        <div className="flex justify-center">
          <h2 className="mb-2 text-xl">Day and Hour you finish your work</h2>
        </div>
        <div className="flex items-center justify-around">
          <DayDropdown selectedValue={day} onChange={setDay} />
          <HourDropdown selectedValue={hour} onChange={setHour} />
        </div>
      </div>
    </Modal>
  )
}

export default StartupModal
