import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const handleAskQuestion = async () => {
    try {
      const response = await axios.post('http://localhost:5000/ask', { question });
      setAnswer(response.data.answer);
      setError('');
    } catch (error) {
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
      {/* Button triggers the question-fetching when clicked */}
      <button onClick={handleAskQuestion}>Ask</button>
      {error && <p>Error: {error}</p>}
      {/* Show user's question and chatbot's answer only after the "Ask" button is clicked */}
      {question && <p>User: {question}</p>}
      {answer && <p>Brainly: {answer}</p>}
    </div>
  );
}

export default Chatbot;
