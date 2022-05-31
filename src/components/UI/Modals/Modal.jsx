import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Button from '@UI/Buttons/Button'
import Panel from '@UI/Panels/Panel'

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  isButtonsCentered: PropTypes.bool,
  isHeadingCentered: PropTypes.bool,
}

Modal.defaultProps = {
  isButtonsCentered: false,
  isHeadingCentered: false,
}

function Modal({
  children,
  title,
  onApply,
  onCancel,
  isButtonsCentered,
  isHeadingCentered,
}) {
  return ReactDOM.createPortal(
    <div className="relative z-10">
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        onClick={onCancel}
      >
        <Panel size="xl">
          <div
            className={`mb-2 text-3xl font-thin text-slate-600 dark:border-b-zinc-600 dark:text-gray-400 ${
              isHeadingCentered ? 'text-center' : ''
            }`}
          >
            {title}
          </div>
          {children}
          <div
            className={`flex dark:border-t-zinc-600 ${
              isButtonsCentered ? 'justify-center' : 'justify-end'
            }`}
          >
            <Button onClick={onApply} title="Apply" />
            {onCancel && <Button onClick={onCancel} title="Cancel" />}
          </div>
        </Panel>
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal
