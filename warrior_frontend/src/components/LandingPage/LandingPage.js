import React from 'react';
import Login from '../Login/Login';
import { Redirect } from 'react-router-dom';

const LandingPage = (props) => {
  return (
    <div className='container'>
      {
        !(localStorage.getItem('isAuthenticated') == 'true')
        ?
          <>
          <h1>Login Page</h1>
          <Login 
            {...props}
          />
          </>
        :
        null
        // <Redirect to =  />
      }
    </div>
  )
}

export default LandingPage;
