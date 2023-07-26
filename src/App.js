import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import supabase from './config/supabaseClient';
import Auth from './backend/Auth';
import Account from './backend/Account';
import Dashboard from './backend/Dashboard';
import Welcome from './components/welcome/welcome.jsx'

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      <Router>
        <Routes>
          {/* Check if the user is logged in, if yes, render the Account page, otherwise, render the login page */}
          <Route
            path="/"
            element={session ? <Auth /> : <Welcome />}
          />

          <Route
            path="/login"
            element={session ? <Dashboard /> : <Auth />}
          />
          
          <Route path="/account" element={<Account session={session} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
