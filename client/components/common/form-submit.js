import React from 'react'
import PropTypes from 'prop-types'

const FormSubmit = (props) => {
  return (
    <div
      className="form-submit"
      onClick={props.handleSubmit}
      onKeyDown={() => {}}
      tabIndex={0}
      role="button"
    >
      Submit
    </div>
  )
}

FormSubmit.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}
export default FormSubmit
