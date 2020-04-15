import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';


function all_my_buddies () {

  // const username = localStorage.getItem("current_user")
  // const user_id = parseInt(localStorage.getItem("current_user_id"))
  // const url = 'http://localhost:8000/friendships/' + user_id + '/friends_list'

  // const get_all_my_buddies = async () => {
  //   let res = await fetch(url, {
  //     method : 'GET',
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      },
  //      params : {
  //       'user_id' : user_id
  //      }
  //   })
  //   let data = await res.json()
  //   console.log("data = ", data)
  //   return data
  // }

  // let temp = get_all_my_buddies()

  return (
    <div className='container'>
      <h1>All My Buddies</h1>
    </div>
      
  )
}

export default all_my_buddies