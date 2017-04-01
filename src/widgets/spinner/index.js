import React, { PropTypes } from 'react'
import Spinner from 'react-spinkit'

class SpinnerOverlay extends React.Component {
  render () {
    var display = this.props.show ? 'flex' : 'none'

    return (
      <div className='spinner-overlay' style={{ display: display }}>
        <Spinner spinnerName={this.props.name} noFadeIn />
        <label>Loading...</label>
      </div>
    )
  }
}

SpinnerOverlay.propTypes = {
  name: PropTypes.string,
  show: PropTypes.bool
}

SpinnerOverlay.defaultProps = {
  name: 'circle',
  show: true
}

export default SpinnerOverlay
