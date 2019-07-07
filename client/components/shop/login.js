import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loginSchema, validationErrHelper } from '../../helpers/yup'
import { login } from '../../redux/reducers/authentication'
import FormField from '../common/form-field'
import FormSubmit from '../common/form-submit'

/* eslint-disable */
const Login = (props) => {
  const [form, setForm] = useState({});
  const [validations, setValidations] = useState({})
  const handleSubmit = async () => {
    try {
      setValidations({})
      const loginObj = await loginSchema().validate(form, { abortEarly: false })
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
          <FormField
            value={form.email}
            setValue={value => setForm({ ...form, email: value })}
            validation={validations.email}
            placeholder="Email"
            iconRight="icon-check"
          />
           <FormField
            value={form.password}
            setValue={value => setForm({ ...form, password: value })}
            validation={validations.password}
            placeholder="Password"
            iconRight="icon-check"
          />
          <FormSubmit handleSubmit={handleSubmit} />
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
