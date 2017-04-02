import React, { PropTypes } from 'react'
import Spinner from 'react-spinkit'

class SpinnerOverlay extends React.Component {
  render () {
    const display = this.props.show ? 'flex' : 'none'
    const style = {
      width: 60,
      height: 60,
      marginBottom: 20
    }

    return (
      <div className='spinner-overlay' style={{ display: display }}>
        <Spinner spinnerName={this.props.name} noFadeIn style={style} />
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
