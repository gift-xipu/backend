import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../styles/welcome/welcome.css'
import Logo from '../../images/logo.gif'
import logo from '../../images/logo.png'

const Welcome = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login'); 
  };

  return (
    
    <div className="welcome">

        <div className="inner-wrapper">

            <div className="container">

                <div className="header clearfix">
                    
                        <div className="title-container">
                            <img
                            src={logo}
                            alt="Enriching minds"
                            className="mind-image"
                            />
                            <h1 className="title">BetterMan</h1>
                        </div>

                        <nav className="links-container">
                            <ul className='"header-navbar'>
                            <li>
                            
                                <button> <a href="/login">Register</a></button>
                            </li>
                            <li>
                                
                                <button><a href="/login">Login</a></button>
                            </li>
                            </ul>
                        </nav>

                </div>
                    
                <div className="inner cover">

                        <h2 className="cover-heading">WELCOME TO OUR LEARNING PLATFORM</h2>
                    
                        <div className="logo-container">
                            <img
                                src={Logo}
                                alt="Better-Man Logo"
                                className="logo-image"
                            />
                        </div>
            
                        
                        <p className="lead">
                        Elevating Minds, Enriching Futures – Better-Man: Cultivating a generation of 
                        empowered minds, equipped with knowledge, resilience, and compassion. 
                        Together, we embrace diversity, spark curiosity, 
                        and pave the way for a world where every young star thrives and leaves an indelible 
                        mark on society.</p>
                        <p className="lead">

                        <button  
                        className='btn btn-lg btn-default'
                        onClick={handleClick}
                        >Get Started</button>
                        </p>
                        
                </div>

            </div>

        </div>

    </div>

  )
}

export default Welcome;

