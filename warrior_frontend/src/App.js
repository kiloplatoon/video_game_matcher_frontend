import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginLayout from './components/Login/LoginLayout'

function App() {
  return (
    <div>
      <Router>
        <Route exact path = '/login' component = {LoginLayout} />
      </Router>
    </div>
  );
}

export default App;
