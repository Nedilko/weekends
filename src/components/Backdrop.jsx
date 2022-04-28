import PropTypes from 'prop-types'

Backdrop.propTypes = {
  onClick: PropTypes.func,
}

function Backdrop({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="backdrop-blur-sm bg-black/30 fixed inset-0 overflow-y-auto h-full w-full z-10"
    ></div>
  )
}

export default Backdrop
