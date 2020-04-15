import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';


function received_buddy_requests () {

  const username = localStorage.getItem("current_user")
  const user_id = parseInt(localStorage.getItem("current_user_id"))
  const url = 'http://localhost:8000/friendships/' + user_id + '/received_friend_requests'

  const get_received_buddy_requests = async () => {
    let res = await fetch(url, {
      method : 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       params : {
        'action_user' : user_id
       }
    })
    let data = await res.json()
    localStorage.setItem('received_buddy_requests', JSON.stringify(data))
    return data
  }

  let temp = get_received_buddy_requests()
  const list = JSON.parse(localStorage.getItem('received_buddy_requests'))  
  let received_buddy_requests = []
  let received_buddy_id_requests = []

  const accept_buddy = async (buddy_id) => {
    console.log(buddy_id)
    const accept_url = 'http://127.0.0.1:8000/friendships/' + user_id + '/accept_friend_request/' + buddy_id
    let res = await fetch(accept_url, {
      method : 'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       params : {
        'user_id' : user_id
       }
    })
    let data = await res.json()
    localStorage.setItem('buddy_list', JSON.stringify(data))
    return data
  }

  if (list['list'] != null && list['list'].length > 0) {
    for (var i = 0; i < list['list'].length; i++){
      received_buddy_requests.push(list['list'][i]['username'])
      received_buddy_id_requests.push(list['list'][i]['id'])
    }
  }
  return (
    <div className='container'>
      <h1>Received Buddy Requests</h1>

      <ul>
      {
        received_buddy_requests.map((value, index) => {
        let buddy_id = list['list'][index]['id']

        temp = received_buddy_id_requests[index]
        return (
          <div>
          <Link to = {`/profile/${temp}`}> {value}</Link><br></br>
          <button onClick = {() => accept_buddy(buddy_id)} >Accept</button>

          </div>
        )
      })}
    </ul>    


    </div>
      
  )
}

export default received_buddy_requests