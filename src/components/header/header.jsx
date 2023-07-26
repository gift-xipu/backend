import React, {useState} from 'react'
import openBook from './images/open-book.png'
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom"
import '../../styles/header/header.css'


const Head = () => {

    const [click, setClick] = useState(false);

    const history = useHistory();
  
    const handleButtonClick = () => {
        history.push('/profile');
    };

  return (
    <div>

        <section className='head'>
            <div className="logo">
                <img className='book' src={openBook} alt="Open book logo" />
                <h1 className='title'>BetterMan</h1>
            </div>
        </section>

        <header>
        
            <nav className='flexDirection'>
              
                <ul className={click ? 'mediaScreen' : 'flexDirection'} onClick={() => setClick(false)}>
                    <li>
                      <Link to="/homepage">Home</Link>
                    </li>
                    <li>
                      <Link to="/courses">Courses</Link>
                    </li>
                </ul>

                <div 
                  className='start' 
                  onClick={handleButtonClick}>
                  <i className='fa fa-user icon'></i>
                </div>

                <button 
                  className='toggle'
                  onClick={() => setClick(!click)}
                >
                  {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                </button>
            </nav>
        </header>

    </div>
  )
}

export default Head