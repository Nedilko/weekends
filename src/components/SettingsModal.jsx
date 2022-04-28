import PropTypes from 'prop-types'

SettingsModal.propTypes = {
  className: PropTypes.string,
}

function SettingsModal({ className }) {
  return (
    <section className={className}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ullam
      saepe, error quo in odio accusantium sed consequatur cupiditate, culpa
      minima ipsa suscipit assumenda, consequuntur possimus? Corporis ducimus a
      possimus.
    </section>
  )
}

export default SettingsModal
