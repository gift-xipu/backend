import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../config/supabaseClient';
import '../styles/account/login.css';
import '../index.css';

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({ email: email, password });

      if (error.message === 'email not confirmed') {
        await supabase.auth.api.sendEmailVerification(email);
        alert(error.message);
      } else {
        alert('Sign-in successful!');
        // Redirect the user to the authenticated area or perform any other actions
      }
    } catch (error) {
      alert('An error occurred during sign-in. Please check the console for more details.');
      console.error('Sign-in Error:', error);
    }

    setLoading(false);
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="description">Sign In</h1>
        <form className="form-widget" onSubmit={handleSignIn}>
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
              {loading ? <span>Loading</span> : <span>Sign In</span>}
            </button>
          </div>
        </form>
        <div>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
