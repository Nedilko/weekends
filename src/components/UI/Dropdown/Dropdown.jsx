import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import DropdownItemsList from './DropdownItemsList'

Dropdown.propTypes = {
  value: PropTypes.string,
  items: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
}

function Dropdown({ label, items, value, onChange }) {
  const dropdownMenu = useRef(null)

  const openClosedIcon = (isOpen) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`mr-1 h-4 w-4 text-gray-500 ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )

  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value)

  const handleSelectItem = (value) => {
    setSelectedValue(value)
    setIsOpen(false)
  }

  useEffect(() => {
    onChange(selectedValue)
  }, [selectedValue])

  useEffect(() => {
    function handleIsClickOutside(event) {
      if (
        isOpen &&
        dropdownMenu.current &&
        !dropdownMenu.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleIsClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleIsClickOutside, true)
    }
  }, [isOpen])

  return (
    <div className="flex flex-row items-center">
      <div className="mr-2 flex items-center justify-center">{label}</div>
      <div className="block" ref={dropdownMenu}>
        <button
          type="button"
          className="flex h-6 items-center justify-between rounded-md border border-slate-100 pl-2 text-base font-thin focus:border-slate-300 focus:outline-none"
          onClick={() => setIsOpen((oldState) => !oldState)}
        >
          {selectedValue}
          {openClosedIcon(isOpen)}
        </button>
        {isOpen && (
          <DropdownItemsList
            className="mt-1 max-h-28 w-28 cursor-pointer border border-gray-200"
            items={items}
            selectedValue={selectedValue}
            handleSelect={handleSelectItem}
          />
        )}
      </div>
    </div>
  )
}

export default Dropdown
