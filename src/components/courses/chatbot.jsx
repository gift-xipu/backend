import React, { useState } from 'react';
//axios to deal with fetching data from the server
import axios from 'axios';

function Chatbot() {
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
    <div className='chatbot-container'>
      <h1>🌋📚 Students Chatbot</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleAskQuestion}>Ask</button>
      {error && <p>{error}</p>}
      {answer && <p>{answer}</p>}
    </div>
  )
}

export default Chatbot