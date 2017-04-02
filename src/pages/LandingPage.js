import React from 'react'
import { ListDreamboxes } from 'dreamboxes'

const LandingPage = () => {
  return (
    <div className='page'>
      <header className='header'>
        <nav>
          <div>
            <a className='special' href='https://www.coderbox.me'><b>Join</b> Coderbox</a>
          </div>
        </nav>
        <div className='content'>
          <img src='/static/images/logo.png' width='120' />
          <h1 className='elegantshadow'>Dreambox</h1>
          <p>Articles, books, tutorials, jobs and meet-ups releated to your dream tech job.</p>
          <a href='https://www.coderbox.me/signup/?code=58b6d18b3d830133dc9e44aa'>Tell us your dream job</a>
        </div>
        <svg className='shadow' width='100%' height='100' viewBox='50 20 50 80' preserveAspectRatio='none'><path d='M0,100 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z' /></svg>
        <svg width='100%' height='100' viewBox='50 20 50 80' preserveAspectRatio='none'><path fill='#FFF' d='M0,100 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z' /></svg>
      </header>

      <ListDreamboxes />

      <footer>
        Made with ❤️ by <a href='https://www.coderbox.me'><img src='https://s3-eu-central-1.amazonaws.com/coderbox-blog/2017/03/logo_4-1.png' height='32' /></a>
      </footer>
    </div>
  )
}

export default LandingPage
