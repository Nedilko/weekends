import GeneralPanel from '@components/UI/GeneralPanel'
import PropTypes from 'prop-types'
import DropdownItem from '@components/UI/Dropdown/DropdownItem'

DropdownItemsList.propTypes = {
  selectedValue: PropTypes.string,
  className: PropTypes.string,
  items: PropTypes.array,
  handleSelect: PropTypes.func,
}

function DropdownItemsList({ items, selectedValue, handleSelect, className }) {
  return (
    <GeneralPanel className={className}>
      {items.map((item, index) => (
        <DropdownItem
          key={index}
          value={item}
          handleSelect={handleSelect}
          isSelected={selectedValue === item}
        />
      ))}
    </GeneralPanel>
  )
}

export default DropdownItemsList
