import React from 'react';
import './home.css';
import { useHistory } from 'react-router-dom';
import Title from '../../title/title';
import Header from '../../header/header';
import Slider from './slider'

const HomePage = () => {

    const history = useHistory();

    const handleButtonClick = () => {
      history.push('/about');
    };

  return (
    
      
        <section className='main-section'>

                <Header />

            <div className="container">

                <div className="row">
                    
                    <Title subtitle='WELLCOME TO BETTER-MAN' title='THE BEST LEARNING PLATFORM'/>
                    <br/>
                    <p className='main-para'>
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

      

    
  )
}

export default HomePage;