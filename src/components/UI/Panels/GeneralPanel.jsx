import PropTypes from 'prop-types'

GeneralPanel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

GeneralPanel.defaultProps = {
  className: '',
}

function GeneralPanel({ children, className }) {
  return (
    <div
      className={`absolute overflow-auto rounded-md bg-white shadow-md dark:bg-zinc-900 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

export default GeneralPanel
