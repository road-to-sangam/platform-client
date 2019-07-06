import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { codes } from 'iso-country-codes';

import { signUpSchema, validationErrHelper, telephoneCodesArray } from '../../helpers/yup'
import { signUp } from '../../redux/reducers/authentication'
import Dropdown from '../common/dropdown'
import FormField from '../common/form-field'

/* eslint-disable */
const Login = (props) => {
  const [form, setForm] = useState({
    countryCode: { name: '' }, phoneCountryCode: { name: '' }
  });
  const [validations, setValidations] = useState({})
  const handleSubmit = async () => {
    const validationObj = {
      ...form, countryCode: form.countryCode.alpha3, phoneCountryCode: form.phoneCountryCode.name
    }
    try {
      setValidations({})
      const signUpObj = await signUpSchema(form).validate(validationObj, { abortEarly: false })
      props.signUp({ ...signUpObj, confirmPassword: undefined })
    } catch (err) {
      setValidations(validationErrHelper(err.inner))
    }
  }
  
  return (
    <div className="main-shop-login">
      <div className="main-shop-login-form">
        <div className="main-shop-login-form-top">
          <div className="main-shop-login-form-top-title">Sign Up</div>
          <div className="main-shop-login-form-top-subtitle">SIGN UP TO THE BEST CONTENT SHARING PAGE IN THE WORLD</div>
        </div>
        <div className="main-shop-login-form-middle">
          {/* FIRST NAME */}
          <FormField
            value={form.firstName}
            setValue={value => setForm({ ...form, firstName: value })}
            validation={validations.firstName}
            placeholder="First Name"
            iconRight="icon-check"
          />
          {/* LAST NAME */}
          <FormField
            value={form.lastName}
            setValue={value => setForm({ ...form, lastName: value })}
            validation={validations.lastName}
            placeholder="Last Name"
            iconRight="icon-check"
          />
          {/* EMAIL */}
          <FormField
            value={form.email}
            setValue={value => setForm({ ...form, email: value })}
            validation={validations.email}
            placeholder="Email"
            iconRight="icon-check"
          />
          {/* PASSWORD */}
          <FormField
            value={form.password}
            setValue={value => setForm({ ...form, password: value })}
            validation={validations.password}
            placeholder="Password"
            iconRight="icon-check"
          />
          {/* CONFIRM PASSWORD */}
          <FormField
            value={form.confirmPassword}
            setValue={value => setForm({ ...form, confirmPassword: value })}
            validation={validations.confirmPassword}
            placeholder="Confirm Password"
            iconRight="icon-check"
          />
          {/* PHONE COUNTRY CODE */}
          <Dropdown
            list={telephoneCodesArray()}
            value={form.phoneCountryCode}
            setValue={listItem => setForm({ ...form, phoneCountryCode: listItem })}
            placeholder="Phone Country Code"
            validation={validations.phoneCountryCode}
          />
          {/* PHONE NUMBER */}
          <FormField
            value={form.phoneNumber}
            setValue={value => setForm({ ...form, phoneNumber: value })}
            validation={validations.phoneNumber}
            placeholder="Phone Number"
            iconRight="icon-check"
          />
          {/* COUNTRY OF RESIDENCE */}
          <Dropdown
            list={codes}
            value={form.countryCode}
            setValue={listItem => setForm({ ...form, countryCode: listItem })}
            placeholder="Country of Residence"
            validation={validations.countryCode}
          />
          {/* MAILING ADDRESS */}
          <FormField
            value={form.mailingAddress}
            setValue={value => setForm({ ...form, mailingAddress: value })}
            validation={validations.mailingAddress}
            placeholder="Mailing Address"
            iconRight="icon-check"
          />
          {/* POSTAL CODE */}
          <FormField
            value={form.postalCode}
            setValue={value => setForm({ ...form, postalCode: value })}
            validation={validations.postalCode}
            placeholder="Postal Code"
            iconRight="icon-check"
          />
          {/* COMPANY NAME */}
          <FormField
            value={form.companyName}
            setValue={value => setForm({ ...form, companyName: value })}
            validation={validations.companyName}
            placeholder="Company Name (optional)"
            iconRight="icon-check"
          />
          {/* SUBMIT */}
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
  signUp: PropTypes.func.isRequired
}
const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => bindActionCreators({
  signUp
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login)
