import React, {useState, useEffect} from 'react';
import '../../styles/home/slider.css'
import { useHistory } from 'react-router-dom';

const Slideshow = () => {

    const imageData = [
      {
        src: '/images/tech.jpg',
        title: 'Technology',
        paragraph: 'Software Engineer, Cyber Security ,Data Anal...',
      },
      {
        src: '/images/science.jpg',
        title: 'Science',
        paragraph: 'Biology, Chemistry, Environmental Scien...',
      },
      {
        src: '/images/edu.jpg',
        title: 'Education',
        paragraph: 'Language and Literacy, Physical and...',
      },
      {
        src: '/images/math.jpg',
        title: 'Mathematics',
        paragraph: 'Algebra, Calculus, Geometry and ...',
      },
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % imageData.length);
      }, 3000); // Change slide every 5 seconds
  
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [imageData.length]);

    const history = useHistory();

    const handleButtonClick = () => {
      history.push('/courses');
    };

    return (
        <div className="slideshow-container">
          {imageData.map((data, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img className='course-picture' src={data.src} alt={`Slide ${index + 1}`} />
              <h2>{data.title}</h2>
              <p>{data.paragraph}</p>
              <button className='btnCourse' onClick={handleButtonClick}>Learn more!</button>
            </div>
          ))}
        </div>
      );
    };
    
export default Slideshow;
      