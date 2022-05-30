import React from 'react'
import { Container, Nav } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/Sass/navbar.scss'

export const NavbarHeader = () => {
    return (
        <>
            <Nav className='vertical-nav' expand="lg" bg="dark">
                <Container className='navbar-container'>
     
                            <Nav.Link id='navbarMain-option' href="/whoami"><p>Who Am I?</p></Nav.Link>
                            <Nav.Link id='navbarMain-option' href="/mybackground"><p>My Background</p></Nav.Link>
                            <Nav.Link id='navbarMain-option' target="_blank" rel="noopener noreferrer" href='https://www.github.com/gars150387'><p>My GitHub</p></Nav.Link>
                            <Nav.Link id='navbarMain-option' href="/contact"><p>Contact</p></Nav.Link>

                </Container>
            </Nav>
        </>

    )
}
