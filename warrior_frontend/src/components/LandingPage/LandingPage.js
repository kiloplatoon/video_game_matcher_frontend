import React, {useState, useEffect} from 'react';
import Login from '../Login/Login';
import { Redirect } from 'react-router-dom';

const LandingPage = (props) => {

  const [userId, setUserId] = useState('')

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
    console.log('data = : ', data)
    setUserId(data['id'])

  }

  useEffect(()=> {
    fetchCurrentUser()
  },)

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
          userId
        ?
          <Redirect to = {`/profile/${userId}`} />
        :
          null
      }
    </div>
  )
}

export default LandingPage;
