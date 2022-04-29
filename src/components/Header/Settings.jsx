import { useState } from 'react'
import SettingsIcon from './SettingsIcon'
import SettingsModal from '../UI/Modal/SettingsModal'

function Settings() {
  const [isModalOpened, seIsModalOpened] = useState(false)
  const applySettings = () => {
    console.log('Settings Applied')
  }

  const handleOpen = () => {
    openModal()
  }
  const handleClose = () => {
    closeModal()
  }
  const handleApply = () => {
    applySettings()
    closeModal()
  }

  const openModal = () => {
    seIsModalOpened(true)
    console.log('modal opened')
  }
  const closeModal = () => {
    seIsModalOpened(false)
    console.log('modal closed')
  }

  return (
    <>
      <SettingsIcon onClick={handleOpen} />
      {isModalOpened && (
        <SettingsModal
          title="Settings"
          onApply={handleApply}
          onCancel={handleClose}
        />
      )}
    </>
  )
}

export default Settings
