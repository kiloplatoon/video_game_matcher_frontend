import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import './Profile.css';

function Profile(props) {

  return (
    <div className='container'>
      {
        localStorage.getItem('isAuthenticated') == 'true'
        ?
          <div className='profile-parent'>
            
            <div className='profile-img'>
              <img src='https://via.placeholder.com/150' />
              <h3> First Name</h3>
            </div>

            <div className='profile-info'>
              <div>
                <h1>Username</h1>
                <div>
                  <h4 className='info-inline'>Casual or Competitive: </h4>
                  <p className='info-inline'>{props.userProfileInfo.casual_competitive}</p>
                </div>
                <div>
                  <h4 className='info-inline'> Platforms:</h4>
                  <p className='info-inline'>{props.userProfileInfo.platform}</p>
                </div>
                <div>
                  <h4 className='info-inline'> Game(s):</h4> 
                  <p className='info-inline'>{props.userProfileInfo.game}</p>
                </div>
              </div>

              <div>
                <button> Add Friend</button>
                <button> Delete Friend</button>
                <br />
                <button> Chat</button>
              </div>
            </div>

          </div> 
        :
         <Redirect to = '/' />
      }
    </div>
  )
}

export default Profile
