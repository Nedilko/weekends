import { useState } from 'react'
import SettingsIcon from './SettingsIcon'
import SettingsModal from './SettingsModal'

function Settings() {
  const [isModalOpened, seIsModalOpened] = useState(false)
  const onChange = () => {}
  const handleClose = () => {
    seIsModalOpened((prevIsModalOpened) => !prevIsModalOpened)
    console.log('modal toggled')
    onChange(isModalOpened)
  }
  return (
    <>
      <SettingsIcon onClick={handleClose} />
      {isModalOpened && (
        <SettingsModal
          title="Settings"
          onApply={handleClose}
          onCancel={handleClose}
        />
      )}
    </>
  )
}

export default Settings
