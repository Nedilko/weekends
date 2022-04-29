import ToggleIcon from './UI/Toggle/ToggleIcon'

function DarkModeSwitcher() {
  const toggleDarkMode = (isDarkMode) => {
    console.log(isDarkMode)
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }
  return <ToggleIcon checked={false} onChange={toggleDarkMode} />
}

export default DarkModeSwitcher
