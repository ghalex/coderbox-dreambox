import React from 'react'
import { ListDreamboxes } from 'dreamboxes'

const LandingPage = () => {
  return (
    <div className='page'>

      <nav>
        <div>
          <a className='special' href='https://www.coderbox.me'><b>Join</b> Coderbox</a>
        </div>
      </nav>

      <section className='header'>
        <div className='content'>
          <img src='/images/logo.png' width='120' />
          <h1 className='elegantshadow'>Dreambox</h1>
          <p>Articles, books, tutorials, jobs and meet-ups releated to your dream tech job.</p>
          <a href='#'>Write a Dreambox</a>
        </div>
        <svg id='header-curve-shadow' width='100%' height='100' viewBox='50 20 50 80' preserveAspectRatio='none'><path d='M0,100 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z' /></svg>
        <svg id='header-curve' width='100%' height='100' viewBox='50 20 50 80' preserveAspectRatio='none'><path fill='#FFF' d='M0,100 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z' /></svg>
      </section>

      <ListDreamboxes />
    </div>
  )
}

export default LandingPage
