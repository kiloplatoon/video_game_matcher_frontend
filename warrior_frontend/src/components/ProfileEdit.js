import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import UserAPI from '../api/UserAPI';


function ProfileEdit (props) {

  const [gameState,setGameState] = useState('')
  const [platformState, setPlatformState] = useState('')
  const [casualorcompetitiveState, setCasualorCompetitiveState] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  const [profileData, setProfileData] = useState({})
  
  console.log( 'inside PROF EIDT: ', profileData)
  const handleSubmit = async (e) => {
    e.preventDefault()
    let gamePref = {
      'casual_competitive' : casualorcompetitiveState.value,
      'game' : gameState.value,
      'platform' : platformState.value
    }

    let data = await UserAPI.updateGamePref(props.match.params.userId, gamePref)
    setProfileData(data)

  }

  const getCurrentUser = async () => {
    let data = await UserAPI.fetchCurrentUser()
    setCurrentUser(data)
    getProfileData(data.id)
  }

  const getProfileData = async (userid) => {
    let data = await UserAPI.fetchProfileDetails(userid)
    setProfileData(data)
  }


  useEffect(()=>{
    getCurrentUser()
  },[])

  console.log('profile edit: ', currentUser)
  console.log('profile data: ', profileData)
  return (
    <div className='container' style={{marginTop: '5%', backgroundColor: '#343A40', padding: '2%'}}>
      <div style={{backgroundColor: 'white', padding: '5%', color: '#7F7F7F', fontWeight: 'bolder'}}>

        <h1 style = {{textAlign: 'center'}}> Edit Gaming Preferences</h1>
        <Form onSubmit = {handleSubmit}>
          <Form.Group controlId="formGridGame">
          <Form.Label>Game</Form.Label>
          <Form.Control onChange={(e) => setGameState({ value: e.target.value })}name='game' type='text' as="select" value={gameState.value} required>
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
            <Form.Control onChange={(e) => setPlatformState({ value: e.target.value })}name='platform' as="select" value={platformState.value} required>
              <option>Choose...</option>
              <option value = "Xbox One">Xbox One</option>
              <option value = "PS4">PS4</option>
              <option value = "PC">PC</option>
              <option value = "Nintendo Switch">Nintendo Switch</option>
            </Form.Control>
          </Form.Group>
          

          <Form.Group controlId="formGridCasualOrCompetitive">
            <Form.Label>CasualOrCompetitive</Form.Label>
            <Form.Control onChange={(e) => setCasualorCompetitiveState({ value: e.target.value })}name='casualorcompetitive' as="select" value={casualorcompetitiveState.value} required>
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