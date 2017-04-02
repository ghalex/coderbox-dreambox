import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import DreamboxList from '../components/DreamboxList'
import FilterByTitle from '../components/FilterByTitle'
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
    const style = {
      position: 'relative',
      minHeight: 200
    }

    return (
      <div className='view-dreamboxes' style={style}>
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
        <div className='filters'>

          <FilterByTitle
            titles={this.props.titles}
            onChange={(value) => this.props.onSelectTitle(value)}
            onClear={() => this.props.onSelectTitle(null)} />

        </div>
        <DreamboxList boxes={this.props.boxes} />
      </div>
    )
  }
}

ListDreamboxes.propTypes = {
  'boxes': PropTypes.array,
  'titles': PropTypes.array,
  'isFetching': PropTypes.bool
}

ListDreamboxes.defaultProps = {
  'isFetching': false,
  'boxes': [],
  'titles': []
}

const mapState = (state) => {
  return {
    boxes: selectors.all(state),
    titles: selectors.titles(state),
    isFetching: selectors.status(state)
  }
}

const mapDispatch = function (dispatch) {
  return {
    onReady: () => {
      dispatch(actions.load())
    },
    onSelectTitle: (title) => {
      dispatch(actions.selectTitle(title))
    }
  }
}

export default connect(mapState, mapDispatch)(ListDreamboxes)
