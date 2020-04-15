// for viewing another person's profile

import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './ProfileNU.css';
import profilepic from '../../images/profilepic.jpeg';
import Post from '../Post/Post';

function ProfileNU(props) {
  console.log('inside PROFILE: ', props.match.params.userId)
  const [user, setUser] = useState([])
  const isLoggedInUser = false
  
  console.log('Profile User: ', user)

  const fetchCurrentUser = async () => {
    let res = await fetch(`http://localhost:8000/profile/${props.match.params.userId}/details/`)
    let data = await res.json()
    console.log('userProfInfoData: ', data)
    setUser(data)
  }

  useEffect(()=> {
    fetchCurrentUser()
  },[])

  console.log('SUDASDUEARESHFUSEFSE: ', user.user)

  return (
    <div className='container profile'>
      {
        localStorage.getItem('isAuthenticated') == 'true'
        ?
          <div className='profile-parent'>
            
            <div className='profile-img'>
              <img src={`${[profilepic]}`} />

              {
                  user.user
                  ?
                  <div style={{textAlign: 'center'}}>
                    <br />
                    <h3> {`${user.user['first_name']} ${user.user['last_name']}`}</h3>
                  </div>
                  :
                  null
                }

              <div style={{marginTop: '8%'}}>
                <hr className = 'divider' />
                <p className="text_underline"><b>About Me</b></p>

                <p> {user.bio} </p>
                <br />
                <hr className = 'divider' />
                <br />

                <p className="text_underline"><b>Gaming Preferences</b></p>

                <p><b>Platform:</b> {user.platform}</p>
                <p><b>Game: </b> {user.game}</p>
                <p><b>Gaming Style:</b> {user.casual_competitive}</p>
                <br />

                <hr className = 'divider' />
                <br />
                <p className="text_underline"><b>Contact</b></p>
                {
                  user.user
                  ?
                  <p><b>Email:</b> {user.user.email}</p>
                  :
                  <p><b>Email:</b> </p>
                }

                <br />
                <hr className = 'divider' />

              </div>
            {/* END PROFILE IMG */}
            </div> 

            
            {/* THIS IS FOR BRYAN'S FRIEND */}
            <>
            <div className='profile-info'>
              {/* Place INSIDE HERE */}
              <div className='friends'>
                <div className='friend-header'>
                  <h2>Friends</h2>
                </div>
                <div className="friend-buttons">
                  {
                    true // change to check friendship
                    ?
                    <Button> Add Buddy </Button>
                  // <Button onClick = { () => }> Add Buddy </Button>
                    :
                  <Button> Delete Buddy</Button>

                  }
                </div>
              </div>

              <hr className = 'divider' />
              
              <div className='populate-friends'>
                <h1>FRIENDS GO HERE</h1>
              </div>

            {/* END OF BRYANS FRIEND AREA. DO NOT CODE ABOVE THIS */}
            <hr className = 'divider' />
            <div className='status'>
                <Post 
                  userId = {props.match.params.userId}
                  isLoggedInUser = {isLoggedInUser}
                />
            </div>
          </div>
          </>
          </div>
        :
         <Redirect to = '/' />
      }
    </div>
  )
}

export default ProfileNU
