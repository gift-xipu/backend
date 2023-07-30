import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import supabase from '../../config/supabaseClient.js';
import '../../styles/header/header.css'
import Title from '../header/head.jsx'


const Head = () => {

    const [click, setClick] = useState(false);

    const history = useNavigate();
    const navigate = useNavigate(); // Get the navigate function from react-router-dom

    async function handleSignOut() {
      const { error } = await supabase.auth.signOut();
  
      if (error) {
        alert(error.message);
      } else {
        // Redirect the user to the login page after successful sign-out
        navigate('/welcome'); // Replace '/login' with the path to your login page
      }
    };

    const handleIconClick = () => {
        history('/account');
    };

  return (
    <>
      <Title/>

      <div className='main'>

      <header>
        
        <nav className='flexDirection'>
              
          <ul className={click ? 'mediaScreen' : 'flexDirection'} onClick={() => setClick(false)}>
            <li>
              <Link to="/welcome">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
          </ul>

          <div className='start' onClick={handleIconClick}>
            <i className='fas fa-user icon'></i>
            <button onClick={handleSignOut}>Sign out</button>
          </div>
                
        </nav>

      </header>

    </div>
    </>
  );
}

export default Head