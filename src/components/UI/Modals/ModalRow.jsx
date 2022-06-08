import PropTypes from 'prop-types'

ModalRow.propTypes = {
  children: PropTypes.node.isRequired,
}

function ModalRow({ children }) {
  return (
    <div className="my-1 flex items-center justify-start gap-5">{children}</div>
  )
}

export default ModalRow
