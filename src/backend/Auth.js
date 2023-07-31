import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../config/supabaseClient';
import '../styles/account/login.css';
import '../index.css';

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // New state for error handling

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        throw new Error(error.message); // Throw an error if the response has an error message
      } else {
        alert('Login successful!');
        // Redirect the user to the authenticated area or perform any other actions
      }
    } catch (error) {
      setError(error.message); // Set the error state with the error message
      console.error('Login Error:', error);
    }

    setLoading(false);
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="description">Sign In</h1>
        <form className="form-widget" onSubmit={handleLogin}>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputField"
            type="password"
            placeholder="Your password"
            value={password}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button className="button block" disabled={loading}>
              {loading ? <span>Loading</span> : <span>Login</span>}
            </button>
          </div>
        </form>
        <div>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        {error && <p className="error-message">{error}</p>} {/* Display the error message if there's an error */}
      </div>
    </div>
  );
}

export default Login;
