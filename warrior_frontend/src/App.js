import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginLayout from './components/Login/LoginLayout';
import RegistrationLayout from './components/Registration/RegistratonLayout';
import UserAPI from './api/UserAPI';
import { FormCheck } from 'react-bootstrap';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)



  const handleLogin = async (e) => {
    e.preventDefault()

    const loginCredentials = {
      'email' : e.target.email.value,
      'password' : e.target.password.value,
    }

    let data = await UserAPI.fetchUserToken(loginCredentials)
    console.log(data)

    if (!data['non_field_errors']) {
      localStorage.setItem('token', data['auth_token'])
      setIsAuthenticated(true)
    }

  }

  const renderLogin = () => {
    return (
      <LoginLayout handleLogin = {handleLogin} />
    )
  }

  const handleRegistration = async (e) => {
    e.preventDefault()
    try {

      let newUser = {
        'email' : e.target.email.value,
        'username' : e.target.username.value,
        'first_name' : e.target.firstName.value,
        'last_name' : e.target.lastName.value,
        'password' : e.target.password.value,
        're_password' : e.target.passwordCheck.value
      }
      console.log(newUser)
      let data = await UserAPI.createNewUser(newUser)
      console.log(data)

    } catch (e) {
      console.log(e)
    }
  }

  const renderRegistration = () => {
    return (
      <RegistrationLayout handleRegistration = {handleRegistration} />
    )
  }




  return (
    <div>
      <Router>
        <Route exact path = '/login' render = {renderLogin} />
        <Route exact path = '/registration' render = {renderRegistration} />
      </Router>
    </div>
  );
}

export default App;
