import * as yup from 'yup'
import { codes } from 'iso-country-codes'
import countryTelephoneCode from 'country-telephone-code';

export const telephoneCodesArray = () => codes.map((country) => {
  const telCodeExceptions = country.name === 'Bouvet Island' ? ['55'] : ['0']
  return {
    secondCheck: country.name,
    name: countryTelephoneCode(country.alpha2) ? countryTelephoneCode(country.alpha2)[0] : telCodeExceptions[0]
  }
})

const arrayReducerHelper = key => (accumulator, currentValue) => [...accumulator, currentValue[key]]
export const arrayReducer = (array, key = 'name') => array.reduce(arrayReducerHelper(key), [])

/* eslint-disable no-param-reassign */
export const validationErrHelper = (inner) => {
  if (Array.isArray(inner)) {
    return inner.reduce((obj, item) => {
      obj[item.path] = {
        message: item.message,
        type: item.type,
        value: item.value
      }
      return obj
    }, {})
  }
  return {}
}

/* eslint-disable */



// SCHEMAS
// ======================================================

export const loginSchema = () => yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export const signUpSchema = form => yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
  confirmPassword: yup.string().required().oneOf([form.password]),
  phoneCountryCode: yup.string().required().oneOf(arrayReducer(telephoneCodesArray())),
  phoneNumber: yup.string().required(),
  countryCode: yup.string().required().oneOf(arrayReducer(codes, 'alpha3')),
  mailingAddress: yup.string().required(),
  postalCode: yup.string().required(),
  companyName: yup.string(),
});

export default {}
