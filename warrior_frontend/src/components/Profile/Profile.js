import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import UserAPI from '../../api/UserAPI';
import './Profile.css';
import profilepic from '../../images/profilepic.jpeg';
import Post from '../Post/Post';

function Profile(props) {
  // console.log('inside PROFILE: ', props.match.params.userId)
  const [user, setUser] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  
  // console.log('Profile Current User: ', currentUser)
  // console.log('Profile User: ', user)

    console.log("current user = ", localStorage.getItem('current_user'))
    console.log("id = ", localStorage.getItem('current_user_id'))

  const fetchCurrentUser = async () => {
    let res = await fetch('http://localhost:8000/auth/current_user/', {
    method : 'GET',
    headers : {
      'Accept' : 'application/json',
      'content-type' : 'application/json',
      'Authorization' : `token ${localStorage.getItem('token')}`
    }
  })
    let data = await res.json()
    // console.log('dadawdadwad: ', data)
    setCurrentUser(data)

    res = await fetch(`http://localhost:8000/profile/${data['id']}/details/`)
    data = await res.json()
    // console.log('userProfInfoData: ', data)
    setUser(data)
  }

  useEffect(()=> {
    fetchCurrentUser()
  },[])

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
                <p><b>Email:</b> {currentUser.email}</p>

                <br />
                <hr className = 'divider' />
                <br />
                <p className="text_underline"><b>Settings</b></p>
                <Link to = {`/profile/${user.id}/edit`}>Edit</Link>

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
                  <Button> All Buddies </Button>
                  <Button> Pending </Button>
                  <Button> Sent </Button>
                </div>
              </div>

              <hr className = 'divider' />
              
              <div className='populate-friends'>
                <h1>FRIENDS GO HERE</h1>
              </div>

            {/* END OF BRYANS FRIEND AREA. DO NOT CODE BELOW THIS */}
            <hr className = 'divider' />
            <div className='status'>
                <Post userId = {props.match.params.userId}/>
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

export default Profile
