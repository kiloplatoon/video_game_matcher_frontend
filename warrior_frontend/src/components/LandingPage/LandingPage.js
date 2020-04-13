import React from 'react';
import Login from '../Login/Login';
import { Redirect } from 'react-router-dom';

const LandingPage = (props) => {
  console.log(props)
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
          <Redirect to = {`/profile/${localStorage.getItem('current_user')}`} />
      }
    </div>
  )
}

export default LandingPage;
