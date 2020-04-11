import React from 'react';
import { Redirect } from 'react-router-dom';

function Profile() {
  return (
    <div>
      {
        localStorage.getItem('isAuthenticated') == 'true'
        ?
          <h1> Profile Page</h1>
        :
         <Redirect to = '/' />
      }
    </div>
  )
}

export default Profile
