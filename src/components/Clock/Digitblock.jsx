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
      <div className="flex w-24 flex-col">
        <div className="flex h-8 items-center justify-center text-lg font-thin uppercase">
          {label}
        </div>
        <Digit digit={digit} />
      </div>
      {separator && <Separator symbol={separator} />}
    </>
  )
}

export default Digitblock
