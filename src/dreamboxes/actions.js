import request from 'superagent'
import { createAction } from 'redux-actions'
import { LOAD, SELECT_TITLE } from './constants'

const pending = createAction(LOAD.PENDING)
const success = createAction(LOAD.SUCCESS)

const fetch = () => {
  return new Promise((resolve, reject) => {
    request
      .get('https://www.coderbox.me/api/dreamboxes')
      .set('content-type', 'application/json')
      .end(
        (error, result) => {
          if (error) {
            reject(error)
          }
          resolve(result.body.data)
        }
      )
  })
}

export const load = () => {
  return async (dispatch) => {
    dispatch(pending())
    const boxes = await fetch()

    dispatch(success(boxes))
  }
}

export const selectTitle = createAction(SELECT_TITLE)
