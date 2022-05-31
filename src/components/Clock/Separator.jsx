import PropTypes from 'prop-types'

Separator.propTypes = {
  symbol: PropTypes.string,
}

Separator.defaultProps = {
  symbol: ':',
}

function Separator({ symbol }) {
  return (
    <div className="mt-8 flex items-center justify-center pb-2 text-5xl">
      {symbol}
    </div>
  )
}

export default Separator
