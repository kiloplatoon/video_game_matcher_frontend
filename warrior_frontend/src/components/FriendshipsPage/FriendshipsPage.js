import React from 'react';
import Login from '../Login/Login';
import { Redirect } from 'react-router-dom';
import UserAPI from '../../api/UserAPI';

const username = localStorage.getItem("current_user")
const user_id = localStorage.getItem("id")


const FriendshipsPage = (props) => {
  return (
    <div className='container'>

        <h1>Friendships</h1>
        <h2>{user_id}</h2>
        <h2>{username}</h2>
        {/* {Object. .values(localStorage)} */}


        <a href="{{user.id}}/friends_list"><button>Friends List</button></a>
        <a href="{{user.id}}/received_friend_requests"><button>Received Friend Requests</button></a>
        <a href="{{user.id}}/sent_friend_requests"><button>Sent Friend Requests</button></a>

        {/* <Redirect to = '/profile/friendships' /> */}
    </div>
  )
}

export default FriendshipsPage;
