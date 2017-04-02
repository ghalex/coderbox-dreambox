import { handleActions } from 'redux-actions'
import { LOAD, SELECT_TITLE } from './constants'

const initialState = {
  'isFetching': false,
  'items': [],
  'selectedTitle': null
}

const reducer = handleActions({
  [LOAD.PENDING]: (state) => {
    return {
      ...state,
      'isFetching': true
    }
  },

  [LOAD.SUCCESS]: (state, action) => {
    return {
      ...state,
      'isFetching': false,
      'items': action.payload
    }
  },

  [SELECT_TITLE]: (state, action) => {
    return {
      ...state,
      'selectedTitle': action.payload
    }
  }
}, initialState)

export default reducer
