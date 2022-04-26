import PropTypes from 'prop-types'

Separator.propTypes = {
  separator: PropTypes.string,
}

function Separator({ separator }) {
  return <div className="text-5xl">{separator || ':'}</div>
}

export default Separator
