import React from 'react'
import openBook from '../../images/open-book.png'
import '../../styles/header/header.css'

const Head = () => {
  return (
    <div>
        <section className='head'>

              <div className="logo">
                    <img className='book' src={openBook} alt="Open book logo" />
                    <h1 className='title'>BetterMan</h1>
                </div>

        </section>

    </div>
  )
}

export default Head