import React from 'react'

const LandingPage = () => {
  return (
    <div className='page'>
      <section className='header'>
        <div className='content'>
          <div>
            <h1 className="elegantshadow">Dreambox</h1>
            <p>Let customers buy your products directly within other mobile apps.</p>
          </div>
          <div>
            <img src='/build/box3.png' />
          </div>
        </div>
        <svg id='header-curve-shadow' width='100%' height='100' viewBox='50 20 50 80' preserveAspectRatio='none'><path d='M0,100 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z' /></svg>
        <svg id='header-curve' width='100%' height='100' viewBox='50 20 50 80' preserveAspectRatio='none'><path fill='#FFF' d='M0,100 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z' /></svg>
      </section>
    </div>
  )
}

export default LandingPage
