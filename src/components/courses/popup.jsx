import React, { useState } from 'react';
import '../../styles/courses/chatbot.css'; // Import the CSS file for styling the pop-up
 // Replace 'icon.svg' with the path to your icon SVG file
import axios from 'axios';
import Helper from './blocks/helper';


const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
    //question
    const [question, setQuestion] = useState('');
    //answer
    const [answer, setAnswer] = useState('');
    //error for error handling
    const [error, setError] = useState('');
  
    const handleAskQuestion = async () => {
      //try catch to deal with error handling
      try {
        //axios.post will fetch data from server, and passes the question
        const response = await axios.post('http://localhost:5000/ask', { question });
        //setAnswer to the response from the server
        setAnswer(response.data.answer);
        setError('');
      } catch (error) {
        //if theres an error in fetching the answer, set the error
        console.error('Error fetching data:', error);
        setAnswer('');
        setError('An error occurred while fetching the answer.');
      }
    };

  return (
    <div>
      <div className={`popup-overlay ${showPopup ? 'show' : ''}`} onClick={togglePopup} />
      <div className={`popup ${showPopup ? 'show' : ''}`}>
        <div className="popup-content">
            
                <h1> <img src='/images/brainly.svg'/>Talk To Brainly</h1>
                
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <button onClick={handleAskQuestion}>Ask</button>
                <div className='bubble'>{error && <p>{error}</p>}
                {answer && <p>{answer}</p>}</div>
                </div>
            
      </div>

      <div className='icon-container'>
        <Helper className="icon" onClick={togglePopup} />
      </div>
    
    </div>
  );
};

export default Popup;
