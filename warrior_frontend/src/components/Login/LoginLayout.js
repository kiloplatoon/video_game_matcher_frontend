import React, { useState, useEffect } from 'react';
import './Login.css';
import Login from './Login';

const LoginLayout = ({ handleLogin }) => {



  return (
    <div className='loginBG'>
      <div className='loginLayout'>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <div className='child-2'>
              <Login handleLogin = { handleLogin }/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginLayout;

