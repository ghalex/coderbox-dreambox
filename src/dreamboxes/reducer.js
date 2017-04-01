import { handleActions, combineActions } from 'redux-actions'
import { LOAD } from './constants'

const initialState = {
  'isFetching': false,
  'items': []
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
  }
}, initialState)

export default reducer
