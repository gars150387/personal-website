import React from 'react'
import { Container, Nav } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/Sass/navbar.scss'
import { Link } from 'react-router-dom';

export const NavbarHeader = () => {
    return (
        <>
            <Nav className='vertical-nav' expand="lg" bg="dark">
                <Container className='navbar-container'>
                    <Link to='/whoami'>
                        <Nav.Link id='navbarMain-option'><p>Who Am I?</p></Nav.Link>
                    </Link>
                    <Link to="/mybackground">
                        <Nav.Link id='navbarMain-option'><p>My Background</p></Nav.Link>
                    </Link>
                    <Nav.Link id='navbarMain-option' target="_blank" rel="noopener noreferrer" href='https://www.github.com/gars150387'><p>My GitHub</p></Nav.Link>
                    <Link to="/contact">
                        <Nav.Link id='navbarMain-option' ><p>Contact</p></Nav.Link>
                    </Link>
                </Container>
            </Nav>
        </>

    )
}
