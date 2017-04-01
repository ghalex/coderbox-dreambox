import React from 'react'
import Dreambox from './Dreambox'

const DreamboxList = ({ boxes }) => {
  return (
    <div className='dreambox-list'>
      {
        boxes.map(
          (box, index) => <Dreambox key={index} box={box} index={index} />
        )
      }
    </div>
  )
}

DreamboxList.propTypes = {
  'boxes': React.PropTypes.array
}

export default DreamboxList
