import PropTypes from 'prop-types'
import { getHour, HOURS } from '@utils/convertTime'
import Dropdown from '@UI/Dropdown/Dropdown'

HourDropdown.propTypes = {
  selectedValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

function HourDropdown({ selectedValue, onChange }) {
  return (
    <Dropdown
      value={HOURS[+selectedValue]}
      items={HOURS}
      label="Hour"
      onChange={(value) => onChange(getHour(value))}
    />
  )
}
export default HourDropdown
