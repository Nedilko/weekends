import PropTypes from 'prop-types'

Separator.propTypes = {
  separator: PropTypes.string,
}

function Separator({ separator }) {
  return <div>{separator || ':'}</div>
}

export default Separator
