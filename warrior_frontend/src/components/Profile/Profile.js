import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  
  // console.log('Profile Current User: ', currentUser)
  // console.log('Profile User: ', user)

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
    <div className='container'>
      {
        localStorage.getItem('isAuthenticated') == 'true'
        ?
          <div className='profile-parent'>
            
            <div className='profile-img'>
              <img src='https://via.placeholder.com/150' />
              {
                user.user
                ?
                <h3> {user.user['first_name']}</h3>
                :
                null
              }
            </div>

            <div className='profile-info'>
              <div>
                {
                  user.user
                  ?
                  <h3> {user.user['username']}</h3>
                  :
                  null
                }
    
                <div>
                  <h4 className='info-inline'>Casual or Competitive: </h4>
                  <p className='info-inline'>{user.casual_competitive}</p>
                </div>
                <div>
                  <h4 className='info-inline'> Platforms:</h4>
                  <p className='info-inline'>{user.platform}</p>
                </div>
                <div>
                  <h4 className='info-inline'> Game(s):</h4> 
                  <p className='info-inline'>{user.game}</p>
                </div>
              </div>

              <div>
                <Link to = {`/profile/${user.id}/edit`}> <Button>Edit</Button></Link>
                <button> Add Friend</button>
                <button> Delete Friend</button>
                <br />
                <button> Chat</button>
                <Link to = {`/profile/${user.id}/buddies`}> <Button>Buddies</Button></Link>

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
