import request from 'superagent'
import { createAction } from 'redux-actions'
import * as constants from './constants'

const pending = createAction(constants.LOAD.PENDING)
const success = createAction(constants.LOAD.SUCCESS)

const fetch = () => {
  return new Promise((resolve, reject) => {
    request
      .get('http://dev.coderbox.me/api/dreamboxes')
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
