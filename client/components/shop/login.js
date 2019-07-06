import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loginSchema, validationErrHelper } from '../../helpers/yup'
import { login } from '../../redux/reducers/authentication'

/* eslint-disable */
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validations, setValidations] = useState({})
  const handleSubmit = async () => {
    try {
      const loginObj = await loginSchema().validate({ email, password }, { abortEarly: false })
      props.login(loginObj)
    } catch (err) {
      setValidations(validationErrHelper(err.inner))
    }
  }
  
  return (
    <div className="main-shop-login">
      <div className="main-shop-login-form">
        <div className="main-shop-login-form-top">
          <div className="main-shop-login-form-top-title">Login</div>
          <div className="main-shop-login-form-top-subtitle">Welcome Back</div>
        </div>
        <div className="main-shop-login-form-middle">
          <div className={cx('form-entry', { 'form-entry-error': validations.email })}>
            <input
              className="form-entry-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
            />
            <div className="form-entry-icon icon-check" />
          </div>
          <div className={cx('form-entry', { 'form-entry-error': validations.password })}>
            <input
              className="form-entry-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className="form-entry-icon icon-check" />
          </div>
          <div
            className="form-submit"
            onClick={handleSubmit}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}
const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login)
