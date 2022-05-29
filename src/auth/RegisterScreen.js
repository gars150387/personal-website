import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useForm } from '../hooks/useForm'
import validator from 'validator';

export const RegisterScreen = () => {

  const [formValues, handleInputChange] = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  })


  const { firstName, lastName, email, password, password2 } = formValues


  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {

      console.log('User info is registered')

    }
  }


  const isFormValid = () => {
    if (firstName.trim().length === 0 || lastName.trim().length === 0) {
      console.log('First name and/or Last name is required')
      return false
    }
    else if (!validator.isEmail(email)) {
      console.log('Email is not valid')
      return false
    }
    else if (password !== password2 || password.length < 6) {
      console.log('Password should be at least 6 characters and match each other')
      return false
    }

    return true
  }

  return (
    <>
      <Container variant="dark">
        {/* <Row>
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
        </Row> */}
        <Form className='mt-3' onSubmit={handleRegister}>
          <Row className='mb-2'>

            <Row>
              <Col className="auth__alert-error"><h1>Checking</h1></Col>
              <Col>
                <input
                  name='firstName'
                  type="text"
                  autoComplete='off'
                  value={firstName}
                  onChange={handleInputChange}
                  placeholder='Name' />
              </Col>
              <Col>
                <input
                  name='lastName'
                  type="text"
                  autoComplete='off'
                  value={lastName}
                  onChange={handleInputChange}
                  placeholder='Last Name' />
              </Col>
              <Col>
                <input
                  name='email'
                  type="email"
                  value={email}
                  autoComplete='off'
                  onChange={handleInputChange}
                  placeholder='Email' />
              </Col>
              <Col>
                <input
                  name='password'
                  type="password"
                  value={password}
                  onChange={handleInputChange}
                  placeholder='Password' />
              </Col>
              <Col>
                <input
                  name='password2'
                  type="password"
                  value={password2}
                  onChange={handleInputChange}
                  placeholder='Confirm Password' />
              </Col>
            </Row>
          </Row>
          {/* <Row>
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
        </Row> */}
          <Row>
            <Button type='submit'>SIGN UP</Button>
          </Row>
        </Form>

      </Container>

    </>
  )
}
