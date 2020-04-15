import React from 'react'
import { Nav, Navbar, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../images/bblogo.png';
const Navigation = (props) => {
  console.log('logo: ', logo)

  const bglogo = () => {
    return (
    
    <img src={logo} alt="Battle Buddies Logo"></img>
    )
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <div className='container'>
          <Navbar.Brand href='/' className='m-auto'> 
            <Link to ='/' >
              <Image 
                src={require('../images/bblogo.png')}
         
              />
            </Link>
          </Navbar.Brand>
        </div>
      </Navbar>
      <Navbar>
        <Nav className="m-auto nav-links">
        {
          localStorage.getItem('isAuthenticated') == 'true'
          ?
            <>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/finder">Buddy Finder</Nav.Link>
              <Nav.Link href="/chat">Chat</Nav.Link>
              <Nav.Link onClick={props.handleLogout} href="/">Logout</Nav.Link>
            </>
          :
            <>
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="/registration">Sign Up</Nav.Link>
            </>
        }
        </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation