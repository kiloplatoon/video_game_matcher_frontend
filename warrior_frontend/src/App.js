import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Registration from './components/Registration';
import UserAPI from './api/UserAPI';
import LandingPage from './components/LandingPage/LandingPage';
import Profile from './components/Profile/Profile';
import ProfileEdit from './components/ProfileEdit';
import Navigation from './components/Navigation';
import Finder from './components/Finder/Finder'
import Messages from './components/Chat/Messages'

import FriendshipsPage from './components/FriendshipsPage/FriendshipsPage'
import all_my_buddies from './components/FriendshipsPage/all_my_buddies'
import received_buddy_requests from './components/FriendshipsPage/received_buddy_requests'
import sent_buddy_requests from './components/FriendshipsPage/sent_buddy_requests'
import search_results from './components/FriendshipsPage/search_results'
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const renderLandingPage = () => {
    return (
    <LandingPage
      handleLogin = {handleLogin}
    />
    )
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    const loginCredentials = {
      'email' : e.target.email.value,
      'password' : e.target.password.value,
    }

    let data = await UserAPI.fetchUserToken(loginCredentials)
    console.log(data)

    if (data['auth_token']) {
      localStorage.setItem('token', data['auth_token'])
      localStorage.setItem('stream_token', data['stream_token'])
      localStorage.setItem('isAuthenticated', true)
      setIsAuthenticated(true)
    }

    let res = await fetch('http://localhost:8000/auth/current_user', {
      method : 'GET',
      headers : {
        'Accept' : 'application/json',
        'content-type' : 'application/json',
        'Authorization' : `token ${localStorage.getItem('token')}`
      }
    })
    let current_user = await res.json()
    localStorage.setItem('current_user', current_user['username'])
    localStorage.setItem('current_user_id', current_user['id'])
    console.log('this is the current_user: ', current_user)

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
      let data = await UserAPI.createNewUser(newUser)
      console.log(data)

      let res = await UserAPI.linkUserToProfile(data.id)
      

    } catch (err) {
      console.log('e: ', err)
    }
  }

  const renderRegistration = () => {
    return (
      <Registration handleRegistration = {handleRegistration} />
    )
  }

  const handleLogout = () => {
    localStorage.clear()
    setIsAuthenticated(false)
  }

  return (
    <div >
      <Router>
        <Navigation 
          isAuthenticated = {isAuthenticated}
          handleLogout = {handleLogout}
        />

        <Switch>
          <Route exact path = '/' render = {renderLandingPage} />
          <Route exact path = '/profile/:userId' component = {Profile} />
          <Route exact path = '/profile/:userId/buddies' component = {FriendshipsPage} />
          <Route exact path = '/profile/:userId/buddies/all_my_buddies' component = {all_my_buddies} />
          <Route exact path = '/profile/:userId/buddies/search_results' component = {search_results} />
          <Route exact path = '/profile/:userId/buddies/received_buddy_requests' component = {received_buddy_requests} />
          <Route exact path = '/profile/:userId/buddies/sent_buddy_requests' component = {sent_buddy_requests} />
          <Route exact path = '/profile/:userId/edit' component = {ProfileEdit} />
          <Route exact path = '/registration' render = {renderRegistration} />
          <Route exact path = '/chat' component = {Messages} isAuthenticated = {isAuthenticated} />
          <Route exact path = '/finder' component = {Finder} />
        </Switch>
      </Router>
    </div>

  );

}

export default App;
