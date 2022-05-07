import DarkModeSwitcher from './DarkModeSwitcher'
import Settings from './Settings'

function Header() {
  return (
    <header className="flex flex-row h-12 justify-between my-2 mx-4">
      <Settings />
      <DarkModeSwitcher />
    </header>
  )
}

export default Header
