import { combineReducers } from 'redux'

import authReducer from './auth'
import categoryReducer from './category'

export default combineReducers({
  authReducer,
  categoryReducer
})