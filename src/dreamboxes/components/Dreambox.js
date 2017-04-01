import React from 'react'
import moment from 'moment'
import md5 from 'js-md5'

const Dreambox = ({ box }) => {
  const hash = md5(box.by.email || '')
  const css = 'dreambox ' + (box.category || '')

  return (
    <div className={css}>
      <div className='box-bg' />
      <img className='box-icon' src={box.icon} height='65' />
      <a href={box.by.url} target='_blank'><img className='box-avatar' src={'https://www.gravatar.com/avatar/' + hash + '?s=48'} /></a>
      <a href={'/dreambox/' + box._id} className='box-name'>{box.name}</a>
      <a href={'/dreambox/' + box._id} className='box-title'>{box.titles[0].name}</a>
      <div>{moment(box.createdAt).format('ddd, DD MMM YYYY')}</div>
      <div className='box-tags'>
        {box.technologies.map((t) => <a href='#'>#{t.name}</a>)}
      </div>
      <a href={'/dreambox/' + box._id} className='box-btn'>Open Box</a>
    </div>
  )
}

Dreambox.propTypes = {
  'todo': React.PropTypes.object,
  'index': React.PropTypes.number,
  'onDelete': React.PropTypes.func
}

export default Dreambox
