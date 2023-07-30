import '../styles/account/login.css'
import supabase from '../config/supabaseClient';
import { useState } from 'react';
import '../index.css'

function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // New state variable for password

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    
    const { error } = await supabase.auth.signInWithOtp({ email, password }); // Include the password

    if (error) {
      alert(error.error_description || error.message);
    } else {
      alert('Check your email for the login link!');
    }
    setLoading(false);
  };

  

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="description">Sign in via magic link</h1>
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
              onChange={(e) => setPassword(e.target.value)} // Update the password state
            />
          
          <div>
            <button className={'button block'} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
