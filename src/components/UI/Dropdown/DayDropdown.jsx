import PropTypes from 'prop-types'
import { getDay, DAYS } from '@utils/convertTime'
import Dropdown from '../Dropdown/Dropdown'

DayDropdown.propTypes = {
  selectedValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

function DayDropdown({ selectedValue, onChange }) {
  return (
    <Dropdown
      value={DAYS[selectedValue - 1]}
      items={DAYS}
      label="Day"
      onChange={(value) => onChange(getDay(value))}
    />
  )
}
export default DayDropdown
