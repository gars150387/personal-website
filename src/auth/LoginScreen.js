import React from 'react'
import { Container, Row, Stack, Col, Button, ButtonGroup, Card } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'



export const LoginScreen = () => {
  return (
    <Container variant="dark">
      <Row>
        <Stack>
          <ButtonGroup className='mt-2'>
            <Button variant='light' className='m-4'>Register</Button>
            <Button variant="primary" className='m-4'>Login</Button>
          </ButtonGroup>
        </Stack>
      </Row>
      <Row>
        <Col>
          <Card.Title>You can sign in with:</Card.Title>
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
            <input placeholder='email address'/>

            <Card.Title>Password:</Card.Title>
            <input placeholder='password'/>
          </Col>
          <Row>
            <Col>
              
            </Col>
          </Row>
        </Row>
      </Row>
    </Container>
  )
}

