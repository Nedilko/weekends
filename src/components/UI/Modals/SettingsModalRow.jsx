import PropTypes from 'prop-types'

SettingsModalRow.propTypes = {
  children: PropTypes.node.isRequired,
}

function SettingsModalRow({ children }) {
  return (
    <div className="my-1 flex items-center justify-start gap-5">{children}</div>
  )
}

export default SettingsModalRow
