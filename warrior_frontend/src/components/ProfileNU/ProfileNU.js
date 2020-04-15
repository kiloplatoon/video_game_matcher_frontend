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

  const user_id = parseInt(localStorage.getItem("current_user_id"))
  const buddy_id = props.match.params.userId
  console.log("buddy id = ", buddy_id)
  const add_buddy = async (buddy_id) => {
    const form_data = new FormData()
    form_data.append('id', user_id)
    form_data.append('user_one', user_id)
    form_data.append('user_two', buddy_id)
    form_data.append('status', 0)
    form_data.append('action_user', user_id)
    console.log(buddy_id)
    console.log(localStorage.getItem("current_user"))
    const add_url = `http://127.0.0.1:8000/friendships/relationship/${user_id}/friend_request/${buddy_id}`
    let res = await fetch(add_url, {
      method : 'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body :  form_data
    })
    let data = await res.json()
    localStorage.setItem('buddy_list', JSON.stringify(data))
    return data
  }

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
                    <Button onClick = {() => add_buddy(buddy_id)} >Add Buddy</Button>
                    // <Button onClick = { () => }> Add Buddy </Button>
                    :
                  <Button> UnBuddy</Button>

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
