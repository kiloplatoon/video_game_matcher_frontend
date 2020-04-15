import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../images/bblogo.png';
const Navigation = (props) => {
  console.log('logo: ', logo)

  const bglogo = () => {
    return (<img src={logo} alt="Battle Buddies Logo" />)
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <div className='container'>
          <Navbar.Brand href='/'> 
            {bglogo}
          </Navbar.Brand>
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