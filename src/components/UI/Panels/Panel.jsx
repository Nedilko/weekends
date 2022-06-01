import PropTypes from 'prop-types'

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
}

Panel.defaultProps = {
  size: 'sm',
}

function Panel({ children, size }) {
  return (
    <div
      className={`max-w-${size} mx-auto rounded-xl bg-white p-4 shadow-md dark:bg-zinc-900`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

export default Panel
