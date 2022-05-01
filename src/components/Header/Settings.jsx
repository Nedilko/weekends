import { useState } from 'react'
import SettingsIcon from './SettingsIcon'
import SettingsModal from '../UI/Modals/SettingsModal'
import { getSettings, setSettings } from '../../utils/settings'

function Settings() {
  const [isModalOpened, seIsModalOpened] = useState(false)

  const applySettings = (data) => {
    setSettings(data)
  }

  const handleOpen = () => {
    openModal()
  }
  const handleClose = () => {
    closeModal()
  }
  const handleApply = (data) => {
    applySettings(data)
    closeModal()
  }

  const openModal = () => {
    seIsModalOpened(true)
  }
  const closeModal = () => {
    seIsModalOpened(false)
  }

  return (
    <>
      <SettingsIcon onClick={handleOpen} />
      {isModalOpened && (
        <SettingsModal
          title="Settings"
          onApply={handleApply}
          onCancel={handleClose}
          settings={getSettings()}
        />
      )}
    </>
  )
}

export default Settings
