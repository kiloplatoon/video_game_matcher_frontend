import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import FriendshipsAPI from '../../api/FriendshipsAPI'

function all_my_buddies () {

  const username = localStorage.getItem("current_user")
  const user_id = parseInt(localStorage.getItem("current_user_id"))
  const url = 'http://localhost:8000/friendships/' + user_id + '/friends_list'

  const get_all_my_buddies = async () => {
    let res = await fetch(url, {
      method : 'GET',
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

  let temp = get_all_my_buddies()
  const list = JSON.parse(localStorage.getItem('buddy_list'))  
  let buddy_list = []
  let buddy_id_list = {}

  const delete_buddy = async (buddy_id) => {
    console.log(buddy_id)
    const delete_url = 'http://127.0.0.1:8000/friendships/' + user_id + '/delete_friend/' + buddy_id
    let res = await fetch(delete_url, {
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
      buddy_list.push(list['list'][i]['username'])
      temp = list['list'][i]['username']
      buddy_id_list[temp] = list['list'][i]['id']
    }
  }

  return (
    <div className='container'>
      <h1>All My Buddies</h1>

    <ul>
      {
        buddy_list.map((value, index) => {
        let buddy_id = list['list'][index]['id']
        console.log(buddy_list)
        const delete_url = 'http://127.0.0.1:8000/friendships/' + user_id + '/delete_friend/' + buddy_id
        return (
          <div>
          <Link to = {`/profile/${buddy_id}`}> {value}</Link><br></br>
          <button onClick = {() => delete_buddy(buddy_id)} >Unbuddy</button>
          </div>
        )
      })}
    </ul>    
    </div>
  )
}

export default all_my_buddies