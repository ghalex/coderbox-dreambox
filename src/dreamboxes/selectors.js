import _ from 'lodash'
import { createSelector } from 'reselect'

export const selectedTitle = (state) => state.dreamboxes.selectedTitle
export const all = createSelector(
  state => state.dreamboxes.items,
  selectedTitle,
  (boxes, title) => {
    if (!title) {
      return boxes
    }
    console.log(title)
    return boxes.filter(
      (box) => _.findIndex(box.titles, (t) => t._id === title._id) > -1
    )
  }
)

export const titles = createSelector(
  all,
  (boxes) => {
    let titles = []
    _.each(boxes, (box) => { titles = titles.concat(box.titles) })
    titles = _.uniqBy(titles, (t) => t._id)

    return titles
  }
)
export const status = (state) => state.dreamboxes.isFetching
