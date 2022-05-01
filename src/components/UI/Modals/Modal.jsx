import PropTypes from 'prop-types'
import Button from '../Buttons/Button'
import Panel from '../Panel'

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

function Modal({ children, title, onApply, onCancel }) {
  return (
    <div className="relative z-10">
      <div
        className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30"
        onClick={onCancel}
      >
        <Panel size="xl">
          <div className="font-thin text-3xl mb-2 pb-2 border-b dark:border-b-zinc-600 text-slate-600 dark:text-gray-400">
            {title}
          </div>
          {children}
          <div className="flex justify-end mt-2 border-t dark:border-t-zinc-600">
            <Button onClick={onApply} title="Apply" />
            <Button onClick={onCancel} title="Cancel" />
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default Modal
