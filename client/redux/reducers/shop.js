// import { push } from 'connected-react-router'

const IS_REQUESTING = 'RTS\\IS_REQUESTING'
const REQUEST_COMPLETE = 'RTS\\REQUEST_COMPLETE'
const initialState = {
  isRequesting: false,
}
/* eslint-disable */

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_REQUESTING:
      return {
        ...state,
        isRequesting: true,
      }
    case REQUEST_COMPLETE:
      return {
        ...state,
        isRequesting: false
      }
    default:
      return state
  }
}


