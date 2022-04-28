import PropTypes from 'prop-types'
import Digit from './Digit'
import Separator from './Separator'

Digitblock.propTypes = {
  label: PropTypes.string.isRequired,
  digit: PropTypes.number.isRequired,
  separator: PropTypes.string,
}

function Digitblock({ label, digit, separator }) {
  return (
    <>
      <div className="font-thin uppercase text-slate-600 dark:text-gray-400">
        <label className="">{label}</label>
        <Digit digit={digit} />
      </div>
      {separator && <Separator symbol={separator} />}
    </>
  )
}

export default Digitblock
