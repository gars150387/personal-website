import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/Sass/navbar.scss'

export const NavbarHeader = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" fluid>
                <Container className='navbar-container'>
                    {/* <Navbar.Brand id='navbarMain-option-0' className='animate__animated animate__bounceInLeft' href="/"><h1>G.A.R.S</h1></Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='animate__animated animate__backInRight'>
                        <Nav className="me-auto" style={{
                            fontSize: '35px'
                        }}>
                            <Nav.Link id='navbarMain-option' href="/whoami"><p>Who Am I?</p></Nav.Link>
                            <Nav.Link id='navbarMain-option' href="/mybackground"><p>My Background</p></Nav.Link>
                            <Nav.Link id='navbarMain-option' target="_blank" rel="noopener noreferrer" href='https://www.github.com/gars150387'><p>My GitHub</p></Nav.Link>
                            <Nav.Link id='navbarMain-option' href="/contact"><p>Contact</p></Nav.Link>

                        </Nav>
                        <Nav style={{
                            fontSize: '35px'
                        }}>
                            {/* <Nav.Link id='navbarMain-option'  eventKey={2} href="/auth/login">
                            Login
                        </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />
        </>

    )
}
