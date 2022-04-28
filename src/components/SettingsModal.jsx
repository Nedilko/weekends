import PropTypes from 'prop-types'
import Modal from './Modal'

SettingsModal.propTypes = {
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

function SettingsModal({ onApply, onCancel }) {
  return (
    <Modal title="Settings" onApply={onApply} onCancel={onCancel}>
      <section className="font-thin text-xl text-slate-600 dark:text-gray-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ullam
        saepe, error quo in odio accusantium sed consequatur cupiditate, culpa
        minima ipsa suscipit assumenda, consequuntur possimus? Corporis ducimus
        a possimus.
      </section>
    </Modal>
  )
}

export default SettingsModal
