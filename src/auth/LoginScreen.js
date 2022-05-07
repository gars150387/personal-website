import React from 'react'
import { Container, Row, Stack, Col, Button, ButtonGroup, Card, Form, Nav } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'



export const LoginScreen = () => {
  return (
    <Container variant="dark">
      <Row>
        <Stack>
          <ButtonGroup className='mt-2'>
          <Nav.Link href='/auth/register'>
                <Button variant='light' className='m-4'>Register</Button>
              </Nav.Link>
              <Nav.Link href='/auth/login'>
                <Button variant='light' className='m-4'>Login</Button>
              </Nav.Link>
          </ButtonGroup>
        </Stack>
      </Row>
      <Row>
        <Col>
          <Card.Title>Sign in with:</Card.Title>
          <br />
          <FaFacebook className='icon' />
          <SiGmail className='icon' />
          <FaGithub className='icon' />
          <FaTwitter className='icon' />
          <br />
          <Card.Title>or</Card.Title>
        </Col>
        <Row>
          <Col>
            <Card.Title>Email Address</Card.Title>
            <input placeholder='email address' />

            <Card.Title>Password:</Card.Title>
            <input placeholder='password' />
          </Col>
          <Row>
            <Col>
              <Form>
                  <div className="mb-3">
                    <Form.Check
                      type='checkbox'
                      id='checkbox'
                      label='Remember me'
                    />
                  </div>
              </Form>

              <Nav.Link href="">Forget Password?</Nav.Link>

            </Col>
          </Row>
        </Row>
        <Button>SIGN IN</Button>
      </Row>
      <Row>
      <Card.Title>Not a member? 
      </Card.Title>
      <Nav.Link href="">Register</Nav.Link>
      </Row>
    </Container>
  )
}

