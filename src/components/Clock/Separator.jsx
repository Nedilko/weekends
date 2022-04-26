import PropTypes from 'prop-types'

Separator.propTypes = {
  symbol: PropTypes.string,
}

function Separator({ symbol }) {
  return <div className="text-5xl mt-4">{symbol}</div>
}

export default Separator
