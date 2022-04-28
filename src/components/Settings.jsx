import { useState } from 'react'
import Modal from './Modal'
import SettingsIcon from './SettingsIcon'
import SettingsModal from './SettingsModal'

function Settings() {
  const [isModalOpened, seIsModalOpened] = useState(false)
  const onChange = () => {}
  const handleClose = () => {
    seIsModalOpened((prevIsModalOpened) => !prevIsModalOpened)
    console.log('clicked')
    onChange(isModalOpened)
  }
  return (
    <>
      <SettingsIcon onClick={handleClose} />
      {isModalOpened && (
        <Modal title="Settings" onApply={handleClose} onCancel={handleClose}>
          <SettingsModal className="font-thin text-xl" />
        </Modal>
      )}
    </>
  )
}

export default Settings
