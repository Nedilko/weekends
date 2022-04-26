import PropTypes from 'prop-types'

Separator.propTypes = {
  separator: PropTypes.string,
}

function Separator({ separator }) {
  const currentSeparator = separator || ':'
  return <div>{currentSeparator}</div>
}

export default Separator
