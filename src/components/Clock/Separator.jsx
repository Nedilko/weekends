import PropTypes from 'prop-types'

Separator.propTypes = {
  symbol: PropTypes.string,
}

function Separator({ symbol }) {
  return (
    <div className="flex items-center justify-center text-5xl mt-8 pb-2">
      {symbol}
    </div>
  )
}

export default Separator
