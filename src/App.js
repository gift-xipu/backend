import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import supabase from './config/supabaseClient';
import Auth from './backend/Auth';
import Account from './backend/Account';
import Courses from './components/courses/courses';
import Dashboard from './backend/Dashboard';
import Welcome from './components/welcome/welcome.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chatbot from './components/courses/chatbot.jsx'

import HtmlPage from "./components/courses/pages/htmlPage.jsx";
import CSSPage from "./components/courses/pages/cssPage.jsx";
import JavascriptPage from "./components/courses/pages/javascriptPage.jsx";
import NodePage from "./components/courses/pages/nodejsPage.jsx";
import DatabasePage from "./components/courses/pages/databasePage.jsx";

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
            element={session ? <Dashboard /> : <Welcome />}
          />

          <Route path="/courses" element={<Courses session={session} />} />
          <Route path="/login" element={<Auth session={session} />} />
          <Route path="/welcome" element={<Welcome session={session} />} />
          <Route path="/account" element={<Account session={session} />} />
          <Route path="/chatbot" element={<Chatbot session={session} />} />

          <Route path="/courses/pages/page1" element={<HtmlPage session={session} />} />
          <Route path="/courses/pages/css" element={<CSSPage session={session} />} />
          <Route path="/courses/javascript" element={<JavascriptPage session={session} />} />
          <Route path="/courses/pages/nodejs" element={<NodePage session={session} />} />
          <Route path="/courses/pages/database" element={<DatabasePage session={session} />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
