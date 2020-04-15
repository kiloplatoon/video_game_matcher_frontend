import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';


function sent_buddy_requests () {

  const username = localStorage.getItem("current_user")
  const user_id = parseInt(localStorage.getItem("current_user_id"))
  const url = 'http://localhost:8000/friendships/' + user_id + '/sent_friend_requests'

  const get_sent_buddy_requests = async () => {
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
    localStorage.setItem('sent_buddy_requests', JSON.stringify(data))
    console.log("data = ", data)
    return data
  }

  let temp = get_sent_buddy_requests()
  const list = JSON.parse(localStorage.getItem('sent_buddy_requests'))  
  let sent_buddy_requests = []
  let sent_buddy_id_requests = []

  // console.log("WTF = ", list['list'])
  if (list != null && list['list'].length > 0) {
    for (var i = 0; i < list['list'].length; i++){
      sent_buddy_requests.push(list['list'][i]['username'])
      sent_buddy_id_requests.push(list['list'][i]['id'])
    }
  }
  return (
    <div>
      <h1>Sent Buddy Requests</h1>

      <ul>
      {
        sent_buddy_requests.map((value, index) => {
        temp = sent_buddy_id_requests[index]
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

export default sent_buddy_requests