import React, { useState, useEffect } from 'react';
import './Registration.css';
import Registration from './Registration';

const RegistrationLayout = ({ handleRegistration }) => {

  return (
    <div className='loginBG'>
      <div className='loginLayout'>
        <div class="jumbotron jumbotron-fluid">
          <div class="container parent">
            <div className='child-1'>
              <h1>Hello World</h1>
            </div>
            <div className='child-2'>
              <Registration handleRegistration = { handleRegistration }/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationLayout;

