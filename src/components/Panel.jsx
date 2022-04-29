import PropTypes from 'prop-types'

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
}

function Panel({ children, size = 'sm' }) {
  return (
    <div
      className={`max-w-${size} mx-auto bg-white p-4 dark:bg-zinc-900 rounded-xl shadow-md`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

export default Panel
