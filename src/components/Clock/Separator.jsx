import PropTypes from 'prop-types'

Separator.propTypes = {
  symbol: PropTypes.string,
}

function Separator({ symbol }) {
  return (
    <div className="text-5xl mt-4 text-slate-600 dark:text-gray-400">
      {symbol}
    </div>
  )
}

export default Separator
