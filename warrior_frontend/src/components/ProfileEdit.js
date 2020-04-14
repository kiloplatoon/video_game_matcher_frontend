import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';


function ProfileEdit () {

  const [gameState,setGameState] = useState('')
  const [platformState, setPlatformState] = useState('')
  const [casualorcompetitiveState, setCasualorCompetitiveState] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(gameState.value)
    console.log(platformState.value)
    console.log(casualorcompetitiveState.value)
  }

  return (
    <div className='container'>

      <Form onSubmit = {handleSubmit}>
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>


        <Form.Group controlId="formGridFirstName">
          <Form.Label>FirstName</Form.Label>
          <Form.Control name="first-name" type="text" placeholder="Enter First Name" />
        </Form.Group>


        <Form.Group controlId="formGridLastName">
          <Form.Label>LastName</Form.Label>
          <Form.Control name="last-name" type="text" placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group controlId="formGridUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control name="username" type='text' placeholder="Enter Username" />
        </Form.Group>

        <Form.Group controlId="formGridGame">
        <Form.Label>Game</Form.Label>
        <Form.Control onChange={(e) => setGameState({ value: e.target.value })}name='game' type='text' as="select" value={gameState.value}>
          <option>Choose...</option>
          <option value = "Call of Duty Warzone">Call of Duty Warzone</option>
          <option value = "Rocket League">Rocket League</option>
          <option value = "Fortnite">Fortnite</option>
          <option value = "Smite">Smite</option>
          <option value = "Overwatch">Overwatch</option>
          
        </Form.Control>
        </Form.Group>

        
        <Form.Group controlId="formGridPlatform">
          <Form.Label>Platform</Form.Label>
          <Form.Control onChange={(e) => setPlatformState({ value: e.target.value })}name='platform' as="select" value={platformState.value}>
            <option>Choose...</option>
            <option value = "Xbox One">Xbox One</option>
            <option value = "PS4">PS4</option>
            <option value = "PC">PC</option>
            <option value = "Nintendo Switch">Nintendo Switch</option>
          </Form.Control>
        </Form.Group>
        

        <Form.Group controlId="formGridCasualOrCompetitive">
          <Form.Label>CasualOrCompetitive</Form.Label>
          <Form.Control onChange={(e) => setCasualorCompetitiveState({ value: e.target.value })}name='casualorcompetitive' as="select" value={casualorcompetitiveState.value}>
            <option>Choose...</option>
            <option value = "Casual">Casual</option>
            <option value = "Competitive">Competitive</option>
          </Form.Control>
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
      
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