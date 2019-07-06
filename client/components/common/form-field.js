import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const FormField = (props) => {
  return (
    <div className={cx('form-entry', { 'form-entry-error': props.validation })}>
      <div className={`form-entry-icon ${props.iconLeft ? props.iconLeft : 'd-none'}`} />
      <input
        className="form-entry-input"
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
        placeholder={props.placeholder}
      />
      <div className={`form-entry-icon ${props.iconRight ? props.iconRight : 'd-none'}`} />
    </div>
  )
}

FormField.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  validation: PropTypes.shape({}),
  iconRight: PropTypes.string,
  iconLeft: PropTypes.string
}
FormField.defaultProps = {
  value: '',
  setValue: () => {},
  placeholder: '',
  validation: false,
  iconRight: false,
  iconLeft: false
}
export default FormField
