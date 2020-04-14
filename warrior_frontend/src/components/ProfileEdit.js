import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Profile.css';


function ProfileEdit () {
  return (
    <Form>
      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>


      {/* <Form.Group controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group> */}
    


      <Form.Group controlId="formGridFirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="first name" placeholder="Enter First Name" />
      </Form.Group>


      <Form.Group controlId="formGridLastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="last name" placeholder="Enter Last Name" />
      </Form.Group>

      <Form.Group controlId="formGridUserName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="user name" placeholder="Enter User Name" />
      </Form.Group>

      <Form.Group controlId="formGridGame">
      <Form.Label>Game</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
    
    <Form.Group controlId="formGridPlatform">
      <Form.Label>Platform</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
    

    <Form.Group controlId="formGridCasualOrCompetitive">
      <Form.Label>CasualOrCompetitive</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
</Form>
      
  )
}



// Username
// email
// first_name
// last_name
// Game = Dropdown Select
// Platform = Dropdown Select
// Casual or Competitive = Dropdown Select



export default ProfileEdit