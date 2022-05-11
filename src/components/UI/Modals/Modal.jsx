import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Button from '../Buttons/Button'
import Panel from '../Panel'

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

function Modal({ children, title, onApply, onCancel }) {
  return ReactDOM.createPortal(
    <div className="relative z-10">
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        onClick={onCancel}
      >
        <Panel size="xl">
          <div className="mb-2 border-b pb-2 text-3xl font-thin text-slate-600 dark:border-b-zinc-600 dark:text-gray-400">
            {title}
          </div>
          {children}
          <div className="mt-2 flex justify-end border-t dark:border-t-zinc-600">
            <Button onClick={onApply} title="Apply" />
            <Button onClick={onCancel} title="Cancel" />
          </div>
        </Panel>
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal
