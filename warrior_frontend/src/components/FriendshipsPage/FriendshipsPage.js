import Login from '../Login/Login';
import UserAPI from '../../api/UserAPI';
import all_my_buddies from './all_my_buddies'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const username = localStorage.getItem("current_user")
const user_id = localStorage.getItem("current_user_id")
const search_url = 'http://localhost:8000/friendships/' + user_id + '/received_friend_requests'

const createNewUser = async (userObj) => {
  let res = await fetch('http://localhost:8000/auth/users/', {
    method : 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(userObj)
  })
  let data = await res.json()
  return data
}


const getFriendsList = async (userObj) => {
  let res = await fetch('http://localhost:8000/friendships/$(user_id)/search_results', {
    method: ''
  })
}

const FriendshipsPage = (props) => {
  return (
    <div className='container'>

        <h1>Friendships</h1>
        <h2>{user_id}</h2>
        <h2>{username}</h2>
        {/* {Object. .values(localStorage)} */}

        <Link to = {`/profile/${user_id}/buddies/all_my_buddies`}> <Button>All My Buddies</Button></Link><br></br>
        <Link to = {`/profile/${user_id}/buddies/received_buddy_requests`}> <Button>Received Buddy Requests</Button></Link><br></br>
        <Link to = {`/profile/${user_id}/buddies/sent_buddy_requests`}> <Button>Sent Buddy Requests</Button></Link><br></br>

        {/* <form action="{search_url}" method="get">
        <input name="search_id" type="text" value="Enter username"></input>
        <input type="submit" value="Search for user"></input>

        </form> */}

        {/* <a href="all_my_buddies"><button>Friends List</button></a>
        <a href="{{user.id}}/received_friend_requests"><button>Received Friend Requests</button></a>
        <a href="{{user.id}}/sent_friend_requests"><button>Sent Friend Requests</button></a> */}

        {/* <Redirect to = '/profile/friendships' /> */}
    </div>
  )
}

export default FriendshipsPage;
