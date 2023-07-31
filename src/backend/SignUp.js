import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import supabase from '../config/supabaseClient';
import '../styles/account/login.css';
import '../index.css';

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({ email, password });

      if (error) {
        alert(error.message);
      } else {
        alert('Sign-up successful!');
        // Redirect the user to the authenticated area or perform any other actions
      }
    } catch (error) {
      alert('An error occurred during sign-up. Please check the console for more details.');
      console.error('Sign-up Error:', error);
    }

    setLoading(false);
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="description">Sign Up</h1>
        <form className="form-widget" onSubmit={handleSignUp}>
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
              {loading ? <span>Loading</span> : <span>Sign Up</span>}
            </button>
          </div>
        </form>
        <div>
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
