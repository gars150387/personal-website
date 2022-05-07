import React from 'react'
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

export const NavbarHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{
                    fontSize: '35px'
                }}>GARS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"  style={{
                    fontSize: '35px'
                }}>
                        <Nav.Link href="#features">Who am I?</Nav.Link>
                        <Nav.Link href="#pricing">My Background</Nav.Link>
                        <NavDropdown bg="transparent" title="My Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav style={{
                    fontSize: '35px'
                }}>
                        <Nav.Link href="#deets">Contact</Nav.Link>
                        <Nav.Link eventKey={2} href="/auth/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
