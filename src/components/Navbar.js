import React from 'react'
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/navbarMain.css'

export const NavbarHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Container>
                <Navbar.Brand id='navbarMain-option-0'  href="/">GARS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"  style={{
                    fontSize: '35px'
                }}>
                        <Nav.Link id='navbarMain-option' href="/whoami">Who am I?</Nav.Link>
                        <Nav.Link id='navbarMain-option'  href="mybackground/certificates">My Background</Nav.Link>
                        <Nav.Link id='navbarMain-option' target="_blank" rel="noopener noreferrer" href='https://www.github.com/gars150387'>My GitHub</Nav.Link>
                    </Nav>
                    <Nav style={{
                    fontSize: '35px'
                }}>
                        <Nav.Link id='navbarMain-option'  href="/contact">Contact</Nav.Link>
                        {/* <Nav.Link id='navbarMain-option'  eventKey={2} href="/auth/login">
                            Login
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
