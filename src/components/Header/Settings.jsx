import { useContext, useState } from 'react'
import SettingsIcon from './SettingsIcon'
import SettingsModal from '../UI/Modals/SettingsModal'
import SettingsContext from '../../store/Settings'

function Settings() {
  const [isModalOpened, seIsModalOpened] = useState(false)
  const settings = useContext(SettingsContext)

  const handleOpen = () => {
    openModal()
  }
  const handleClose = () => {
    closeModal()
  }
  const handleApply = (data) => {
    settings.handleApply(data)
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
          settings={settings.data}
        />
      )}
    </>
  )
}

export default Settings
