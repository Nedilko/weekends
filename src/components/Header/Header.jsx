import DarkModeSwitcher from './DarkModeSwitcher'
import Settings from './Settings'

function Header() {
  return (
    <div className="flex justify-between bg-white dark:bg-zinc-900 duration-300 ease-in-out p-2">
      <Settings />
      <DarkModeSwitcher />
    </div>
  )
}

export default Header
