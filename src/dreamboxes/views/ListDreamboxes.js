import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import DreamboxList from '../components/DreamboxList'
import Spinner from 'widgets/spinner'
import * as actions from '../actions'
import * as selectors from '../selectors'

class ListDreamboxes extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editMode: false }
  }

  componentDidMount () {
    if (this.props.onReady) {
      this.props.onReady()
    }
  }

  renderLoading () {
    return (
      <div className='dreambox'>
        <Spinner name='circle' show />
      </div>
    )
  }

  render () {
    if (this.props.isFetching) {
      return this.renderLoading()
    }

    return (
      <div className='view-dreamboxes'>
        <DreamboxList boxes={this.props.boxes} />
      </div>
    )
  }
}

ListDreamboxes.propTypes = {
  'boxes': PropTypes.array,
  'isFetching': PropTypes.bool
}

ListDreamboxes.defaultProps = {
  'isFetching': false,
  'boxes': []
}

const mapState = (state) => {
  return {
    boxes: selectors.all(state)
  }
}

const mapDispatch = function (dispatch) {
  return {
    onReady: () => {
      dispatch(actions.load())
    }
  }
}

export default connect(mapState, mapDispatch)(ListDreamboxes)
