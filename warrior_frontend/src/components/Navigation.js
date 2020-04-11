import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <div className='container'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
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
        </div>
      </Navbar>
    </div>
  )
}

export default Navigation