import * as yup from 'yup'

const arrayReducerHelper = (accumulator, currentValue) => [...accumulator, currentValue.name]
export const arrayReducer = array => array.reduce(arrayReducerHelper, [])

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

export const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export default {}
