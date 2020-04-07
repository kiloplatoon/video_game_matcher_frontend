import React, { useState, useEffect } from 'react';
import './Login.css';
import Login from './Login';

const LoginLayout = () => {
  return (
    <div className='loginBG'>
      <div className='loginLayout'>
        <div class="jumbotron jumbotron-fluid">
          <div class="container parent">
            <div className='child-1'>
              <h1>Hello World</h1>
            </div>
            <div className='child-2'>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginLayout;

