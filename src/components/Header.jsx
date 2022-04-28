import DarkModeSwitcher from './DarkModeSwitcher'

function Header() {
  return (
    <div className="flex absolute right-0 justify-end p-2">
      <DarkModeSwitcher />
    </div>
  )
}

export default Header
