import GeneralPanel from '@components/UI/GeneralPanel'
import PropTypes from 'prop-types'

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
        <option
          onClick={(e) => handleSelect(e.target.value)}
          key={index}
          value={item}
          className={`px-2 py-1 text-sm hover:bg-slate-200 dark:hover:bg-slate-700 ${
            selectedValue === item ? 'font-regular' : 'font-thin'
          }`}
        >
          {item}
        </option>
      ))}
    </GeneralPanel>
  )
}

export default DropdownItemsList
