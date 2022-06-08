import { useContext, useState } from 'react'
import SettingsIcon from '@components/Header/SettingsIcon'
import SettingsModal from '@UI/Modals/SettingsModal'
import SettingsContext from '@store/Settings'

function Settings() {
  const [isModalOpened, seIsModalOpened] = useState(false)
  const settings = useContext(SettingsContext)

  const handleOpen = () => {
    seIsModalOpened(true)
  }
  const handleClose = () => {
    seIsModalOpened(false)
  }
  const handleApply = (data) => {
    settings.handleApply(data)
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
