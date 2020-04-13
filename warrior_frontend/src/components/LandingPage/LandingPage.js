import React from 'react';
import Login from '../Login/Login';
import { Container, Row, Col, } from 'react-bootstrap';

const LandingPage = (props) => {
  return (
    <div className='container'>
      {
        !(localStorage.getItem('isAuthenticated') == 'true')
        ?
          <>
          <h1>Login Page</h1>
          <Login 
            {...props}
          />
          </>
        :
        <Container fluid>

        </Container>
      }
    </div>
  )
}

export default LandingPage;
