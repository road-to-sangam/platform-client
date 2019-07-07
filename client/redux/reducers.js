import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authentication from './reducers/authentication'
import shop from './reducers/shop'

export default history => combineReducers({
  router: connectRouter(history),
  authentication,
  shop
})
