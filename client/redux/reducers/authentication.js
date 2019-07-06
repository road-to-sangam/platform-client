// import { push } from 'connected-react-router'

const IS_REQUESTING = 'RTS\\IS_REQUESTING'
const REQUEST_COMPLETE = 'RTS\\REQUEST_COMPLETE'
const LOGIN = 'RTS\\LOGIN'
const initialState = {
  loggedIn: false,
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
    case LOGIN:
      return {
        ...state,
        userInfo: action.data
      }
    default:
      return state
  }
}

//${process.env.API_PROVIDER_URL}
export const login = (formObj) => async (dispatch) => {
  try {
    dispatch({ type: IS_REQUESTING })
    const response = await fetch(`/api/authentication/loginEmail/${formObj.email}/${formObj.password}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
      .then(res => {
        console.log(res)
        return res.json()
      })
    console.log(response)
    dispatch({ type: REQUEST_COMPLETE })
    dispatch({ type: LOGIN, data: response })
  } catch (err) {
    console.log(err)
    dispatch({ type: REQUEST_COMPLETE })
  }
  

}
