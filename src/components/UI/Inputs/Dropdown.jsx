import { useEffect, useState, useRef } from 'react'

import PropTypes from 'prop-types'

Dropdown.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

function Dropdown({ value, onChange }) {
  const dropdownMenu = useRef(null)
  const dropdownButton = useRef(null)
  const items = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  const closedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mr-1 h-4 w-4 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )

  const openIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mr-1 h-4 w-4 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  )

  const [isActive, setIsActive] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value)

  const handleClick = () => setIsActive(!isActive)

  const handleSelectItem = (e) => {
    setSelectedValue(e.target.value)
    setIsActive(false)
  }

  useEffect(() => {
    onChange(selectedValue)
  }, [selectedValue])

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownMenu.current &&
        !dropdownMenu.current.contains(event.target) &&
        dropdownButton.current &&
        !dropdownButton.current.contains(event.target)
      ) {
        setIsActive(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [dropdownMenu])

  const drowpDown = items.map((item, index) => (
    <option
      onClick={handleSelectItem}
      key={index}
      value={item}
      className="px-2 py-1 text-sm font-thin hover:bg-slate-200"
    >
      {item}
    </option>
  ))

  return (
    <div>
      <button
        ref={dropdownButton}
        type="button"
        className="flex h-6 w-28 items-center justify-between rounded-md border border-slate-100 pl-2 text-base font-thin focus:border-slate-300 focus:outline-none"
        onClick={handleClick}
      >
        {selectedValue}
        {isActive ? openIcon : closedIcon}
      </button>
      {isActive && (
        <div
          ref={dropdownMenu}
          className="absolute mt-1 max-h-28 w-28 cursor-pointer overflow-auto rounded-md border border-gray-200 bg-white shadow-md"
        >
          {drowpDown}
        </div>
      )}
    </div>
  )
}

export default Dropdown
