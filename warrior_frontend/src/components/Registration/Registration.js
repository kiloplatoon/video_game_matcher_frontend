import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Registration = ( { handleRegistration } ) => {
  return (
    <div>
      <Form onSubmit = {handleRegistration}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Username: </Form.Label>
          <Form.Control name='username' type="username" placeholder="Enter username" required />
        </Form.Group>

        <Form.Group>
          <Form.Label>First Name: </Form.Label>
          <Form.Control name='firstName' type="text" placeholder="Enter username" required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name: </Form.Label>
          <Form.Control name='lastName' type="text" placeholder="Enter username" required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Retype-Password:</Form.Label>
          <Form.Control name='passwordCheck' type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Registration