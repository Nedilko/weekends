import PropTypes from 'prop-types'

SettingsModalRow.propTypes = {
  children: PropTypes.node.isRequired,
}

function SettingsModalRow({ children }) {
  return <div className="flex justify-end my-1">{children}</div>
}

export default SettingsModalRow
