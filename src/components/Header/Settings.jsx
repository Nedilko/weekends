import { useState } from 'react'
import SettingsIcon from '@components/Header/SettingsIcon'
import SettingsModal from '@UI/Modals/SettingsModal'
import { useSettingsData, useSettingsDispatch } from '@store/Settings'

function Settings() {
  const [isModalOpened, seIsModalOpened] = useState(false)
  const settings = useSettingsData()
  const dispatch = useSettingsDispatch()

  const handleOpen = () => {
    seIsModalOpened(true)
  }
  const handleClose = () => {
    seIsModalOpened(false)
  }
  const handleApply = (data) => {
    dispatch({ type: 'set', payload: data })
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
          settings={settings}
        />
      )}
    </>
  )
}

export default Settings
