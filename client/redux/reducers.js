import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authentication from './reducers/authentication'

export default history => combineReducers({
  router: connectRouter(history),
  authentication
})
