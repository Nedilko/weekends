import PropTypes from 'prop-types'
import Digit from './Digit'

Digitblock.propTypes = {
  label: PropTypes.string.isRequired,
  digit: PropTypes.string.isRequired,
  noSeparator: PropTypes.bool,
}

function Digitblock({ label, digit }) {
  return (
    <div className="font-thin uppercase text-slate-600">
      <label className="">{label || '<digit_label>'}</label>
      <Digit digit={digit} />
    </div>
  )
}

export default Digitblock
