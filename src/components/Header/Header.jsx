import DarkModeSwitcher from '@components/Header/DarkModeSwitcher'
import Settings from '@components/Header/Settings'

function Header() {
  return (
    <header className="my-2 mx-4 flex h-12 flex-row justify-between">
      <Settings />
      <DarkModeSwitcher />
    </header>
  )
}

export default Header
