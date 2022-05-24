import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

DropdownItem.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

function DropdownItem({ handleSelect, value, isSelected }) {
  const ref = useRef(null)

  useEffect(() => {
    if (isSelected && ref.current) {
      ref.current.scrollIntoView()
    }
  }, [isSelected])

  return (
    <option
      ref={ref}
      onClick={(e) => handleSelect(e.target.value)}
      value={value}
      data-testid="dropdown-item"
      className={`px-2 py-1 text-sm hover:bg-slate-200 dark:hover:bg-slate-700 ${
        isSelected ? 'font-regular' : 'font-thin'
      }`}
    >
      {value}
    </option>
  )
}

export default DropdownItem
