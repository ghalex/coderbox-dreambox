import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import dreamboxes from 'dreamboxes'

export default combineReducers({
  'routing': routerReducer,
  'dreamboxes': dreamboxes.reducer
})
