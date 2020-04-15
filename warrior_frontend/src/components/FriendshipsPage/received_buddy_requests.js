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

  if (list['list'] != null && list['list'].length > 0) {
    for (var i = 0; i < list['list'].length; i++){
      received_buddy_requests.push(list['list'][i]['username'])
      received_buddy_id_requests.push(list['list'][i]['id'])
    }
  }
  return (
    <div>
      <h1>Received Buddy Requests</h1>

      <ul>
      {
        received_buddy_requests.map((value, index) => {
        temp = received_buddy_id_requests[index]
        return (
          <div>
          <Link to = {`/profile/${temp}`}> {value}</Link><br></br>
          </div>
        )
      })}
    </ul>    


    </div>
      
  )
}

export default received_buddy_requests