import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginLayout from './components/Login/LoginLayout';
import UserAPI from './api/UserAPI';

function App() {

  const [userAuth, setUserAuth] = useState({
    'token' : '',
  })
  const [isAuthenticated, setIsAuthenticated] = useState(false)



  const handleLogin = async (e) => {
    e.preventDefault()

    const loginCredentials = {
      'email' : e.target.email.value,
      'password' : e.target.password.value,
    }

    let data = await UserAPI.fetchUserToken(loginCredentials)
    console.log(data)

  }

  const renderLogin = () => {
    return (
      <LoginLayout handleLogin = {handleLogin} />
    )
  }


  return (
    <div>
      <Router>
        <Route exact path = '/login' render = {renderLogin} />
      </Router>
    </div>
  );
}

export default App;
