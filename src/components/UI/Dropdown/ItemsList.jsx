import GeneralPanel from '@components/UI/GeneralPanel'
import PropTypes from 'prop-types'

ItemsList.propTypes = {
  selectedValue: PropTypes.string,
  items: PropTypes.array,
  handleSelect: PropTypes.func,
}

function ItemsList({ items, selectedValue, handleSelect }) {
  return (
    <GeneralPanel className="mt-1 max-h-28 w-28 cursor-pointer border border-gray-200">
      {items.map((item, index) => (
        <option
          onClick={(e) => handleSelect(e.target.value)}
          key={index}
          value={item}
          className={`px-2 py-1 text-sm hover:bg-slate-200 ${
            selectedValue === item ? 'font-regular' : 'font-thin'
          }`}
        >
          {item}
        </option>
      ))}
    </GeneralPanel>
  )
}

export default ItemsList
