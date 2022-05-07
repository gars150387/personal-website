import React from 'react'
import { Container, Row, Stack, Col, Button, ButtonGroup, Card, Form, Nav } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'


export const RegisterScreen = () => {
  return (
    <>
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
        </Row>
        <Row>
          <Col>
            <input placeholder='Name' />
            <br />
            <input placeholder='Last Name' />
            <br />
            <input placeholder='Email' />
            <br />
            <input placeholder='Password' />
            <br />
            <input placeholder='Confirm Password' />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <div className="mb-3">
                <Form.Check
                  type='checkbox'
                  id='checkbox'
                // label='Agree to terms and conditions'
                />
                <Card.Title>Agree to terms and conditions</Card.Title>
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <Button>SIGN IN</Button>
        </Row>

      </Container>

    </>
  )
}
