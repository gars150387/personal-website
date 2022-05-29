// import React from 'react'
// import { useNavigate } from "react-router-dom";
// import { Row, Stack, Col, Button, ButtonGroup, Card, Form, Nav, Container } from 'react-bootstrap'
// import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
// import { SiGmail } from 'react-icons/si'
// import { useDispatch } from 'react-redux'
// import { login, startGoogleLogin } from '../actions/auth'
// import { useForm } from '../hooks/useForm'

// import '../styles/login.css'

// export const LoginScreen = () => {

//   const dispatch = useDispatch()

//   const navigate = useNavigate()

//   const [formValues, handleInputChange] = useForm({
//     email: 'gar.santeliz@gmail.com',
//     password: '123456'
//   })

//   const { email, password } = formValues

//   const handleLogin = (e) => {
//     e.preventDefault();
//     dispatch( login() )
//     navigate('/')

//   }


//   const handleGoogleLogin = () =>{
//     dispatch( startGoogleLogin() )
//     navigate('/')

//   }

//   return (
//     <Container>
//       <Row>
//         <Stack>
//           <ButtonGroup className='mt-2'>
//             <Nav.Link href='/auth/register'>
//               <Button variant='light' className='m-4'>Register</Button>
//             </Nav.Link>
//             <Nav.Link href='/auth/login'>
//               <Button variant='light' className='m-4'>Login</Button>
//             </Nav.Link>
//           </ButtonGroup>
//         </Stack>
//       </Row>
//       <Form onSubmit={handleLogin}>
//         <Col>
//           <Card.Title>Sign in with:</Card.Title>
//           <br />
//           <FaFacebook className='icon' />
//           <SiGmail
//           onClick={ handleGoogleLogin }
//           className='icon' />
//           <FaGithub className='icon' />
//           <FaTwitter className='icon' />
//           <br />
//           <Card.Title>or</Card.Title>
//         </Col>
//         <Form.Group onSubmit={handleLogin} className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             name='email'
//             autoComplete='off'
//             value={email}
//             onChange={handleInputChange}
//             type="email"
//             placeholder="Enter email" />

//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             name='password'
//             value={password}
//             onChange={handleInputChange}
//             type="password"
//             placeholder="Password" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Stack direction='horizontal' gap={3}>
//             <Nav.Link href="">Forget Password?</Nav.Link>
//             <Card.Title>Not a member? </Card.Title>
//             <Nav.Link href="">Register</Nav.Link>
//           </Stack>

//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>        
//       </Form>
//       <Row>
//       </Row>
//     </Container>
//   )
// }