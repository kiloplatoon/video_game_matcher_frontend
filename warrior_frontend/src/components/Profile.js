import React from 'react';
import { Redirect } from 'react-router-dom';

const userID = localStorage.getItem("id")
const username = localStorage.getItem("current_user")


function Profile() {
  return (
    <div>
      {
        localStorage.getItem('isAuthenticated') == 'true'
        ? 
        <div> 
          <h1> Profile Page</h1>
          <p>Hello {username}! {userID}</p>
        </div>
        :
         <Redirect to = '/' />
      }
    </div>
  )
}

export default Profile
