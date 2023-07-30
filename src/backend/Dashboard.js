import { useNavigate} from 'react-router-dom';
import React from 'react';
import '../styles/home/home.css';
import Title from '../components/home/title.jsx';
import Header from '../components/header/header';
import Slider from '../components/home/slider.jsx'

export default function Dashboard() {
  
  const history = useNavigate();

  const handleButtonClick = () => {
    history('/about');
  };

  return (
    <div className='body'>

      <Header />

      <section className='main-section'>
        
        <div className="container">

          <div className="row">
                    
            <Title subtitle='WELCOME TO BETTER-MAN' title='THE BEST LEARNING PLATFORM'/>
            <br/>
            <p className='main-paragraph'>
                A non-governmental organization (NGO) dedicated to empowering 
                and developing our future stars. At Better-Man, we think that every child has 
                the potential to shine brightly in the world. Our purpose is to make the future a 
                better place by focusing on improving mental and educational skills, nurturing young 
                brains, 
                and cultivating a compassionate and inclusive community.
            </p>
                    
            <button className='btnPrimary' onClick={handleButtonClick}>About us</button>

          </div>

          <div className='slider'>
            <Slider />
          </div>
                
        </div>

      </section>
    
    </div>
  );
}
