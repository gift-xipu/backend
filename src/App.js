import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import supabase from './config/supabaseClient';
import Account from './backend/Account';
import Courses from './components/courses/courses';
import Dashboard from './backend/Dashboard';
import Welcome from './components/welcome/welcome.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chatbot from './components/courses/chatbot.jsx'

<<<<<<< HEAD
import HtmlPage from "./components/courses/pages/WebDevelopment/htmlPage.jsx";
import CSSPage from "./components/courses/pages/WebDevelopment/cssPage.jsx";
import JavascriptPage from "./components/courses/pages/WebDevelopment/javascriptPage.jsx";
import NodePage from "./components/courses/pages/WebDevelopment/nodejsPage.jsx";
import DatabasePage from "./components/courses/pages/WebDevelopment/databasePage.jsx";


import pythonBasics from "./components/courses/pages/BusinessIntelligence/pythonBasics.js";
import sqlBasics from "./components/courses/pages/BusinessIntelligence/sqlBasics.js";
import principlesOfData from "./components/courses/pages/BusinessIntelligence/principlesOfData.js";
import pandas from "./components/courses/pages/BusinessIntelligence/pandas.js";
=======
import HtmlPage from "./components/courses/pages/htmlPage.jsx";
import CSSPage from "./components/courses/pages/cssPage.jsx";
import JavascriptPage from "./components/courses/pages/javascriptPage.jsx";
import NodePage from "./components/courses/pages/nodejsPage.jsx";
import DatabasePage from "./components/courses/pages/databasePage.jsx";
import SignUp from './backend/SignUp';
import Login from './backend/Auth';
>>>>>>> 1fa2b730347f064e7c5e0fc9ddb6fd000a3e2309

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
        <Route path="/" element={session ? <Dashboard /> : <Welcome />} />
        <Route path="/courses" element={<Courses session={session} />} />
        <Route path="/login" element={<Login session={session} />} />
        <Route path="/welcome" element={<Welcome session={session} />} />
        <Route path="/account" element={<Account session={session} />} />
        <Route path="/chatbot" element={<Chatbot session={session} />} />
        <Route path="/courses/pages/page1" element={<HtmlPage session={session} />} />
        <Route path="/courses/pages/css" element={<CSSPage session={session} />} />
        <Route path="/courses/javascript" element={<JavascriptPage session={session} />} />
        <Route path="/courses/pages/nodejs" element={<NodePage session={session} />} />
        <Route path="/courses/pages/database" element={<DatabasePage session={session} />} />

<<<<<<< HEAD
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


          <Route path="/courses/pages/page2" element={<pandas session={session} />} />
          <Route path="/courses/pages/principlesOfDataPage" element={<principlesOfDataPage session={session} />} />
          <Route path="/courses/pages/pythonBasicsPage" element={<pythonBasics session={session} />} />
          <Route path="/courses/pages/sqlBasicsPage" element={<sqlBasics session={session} />} />
        
        </Routes>
      </Router>
    </div>
=======
        {/* Add the Sign Up route */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  </div>
>>>>>>> 1fa2b730347f064e7c5e0fc9ddb6fd000a3e2309
  );
}

export default App;
