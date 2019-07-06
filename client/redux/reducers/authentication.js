// import { push } from 'connected-react-router'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
        loggedIn: true,
        userInfo: action.data
      }
    default:
      return state
  }
}

//${process.env.API_PROVIDER_URL}

export const signUp = (formObj) => async (dispatch) => {
  try {
    dispatch({ type: IS_REQUESTING })
    const response = await fetch(`/api/authentication/new-user`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObj)
    })
      .then(res => res.json())
    if (response.err) return dispatch({ type: REQUEST_COMPLETE })
    dispatch({ type: REQUEST_COMPLETE })
  } catch (err) {
    dispatch({ type: REQUEST_COMPLETE })
  }
}

export const login = (formObj) => async (dispatch) => {
  cookies.remove('uid');
  cookies.remove('password');
  try {
    dispatch({ type: IS_REQUESTING })
    const response = await fetch(`/api/authentication/loginEmail/${formObj.email}/${formObj.password}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
    if (response.err) return dispatch({ type: REQUEST_COMPLETE })
    cookies.set('uid', response._id, { path: '/' });
    cookies.set('password', formObj.password, { path: '/' });
    dispatch({ type: REQUEST_COMPLETE })
    dispatch({ type: LOGIN, data: response })
  } catch (err) {
    dispatch({ type: REQUEST_COMPLETE })
  }
}

export const tryGetUserInfo = () => async (dispatch) => {
  const uid = cookies.get('uid')
  const password = cookies.get('password')
  try {
    dispatch({ type: IS_REQUESTING })
    const response = await fetch(`/api/authentication/login/${uid}/${password}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
    if (response.err) return dispatch({ type: REQUEST_COMPLETE })
    dispatch({ type: REQUEST_COMPLETE })
    dispatch({ type: LOGIN, data: response })
  } catch (err) {
    dispatch({ type: REQUEST_COMPLETE })
  }
}
