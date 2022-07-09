import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { FaQuestionCircle, FaGithub, FaNetworkWired } from 'react-icons/fa'
import {GrCertificate, GrContact} from 'react-icons/gr'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/Sass/navbar.scss'
import { Link } from 'react-router-dom';

export const NavbarHeader = () => {
    return (
        <>
            <Nav className='vertical-nav' expand="lg" bg="dark">
                <Container className='navbar-container'>
                    <Link to='/whoami'>
                        <Nav.Link id='navbarMain-option' href='/whoami'><p>Who Am I <FaQuestionCircle className='icons' /></p></Nav.Link>
                    </Link>
                    <Link to="/mybackground">
                        <Nav.Link id='navbarMain-option' href='/mybackground'><p>My Background <GrCertificate className='icons'  /></p></Nav.Link>
                    </Link>
                    <Nav.Link id='navbarMain-option' target="_blank" rel="noopener noreferrer" href='https://www.github.com/gars150387'><p>My GitHub <FaGithub className='icons'  /></p></Nav.Link>
                    <Link to="/contact">
                        <Nav.Link id='navbarMain-option' href='/contact' ><p>Contact <GrContact className='icons'  /></p></Nav.Link>
                    </Link>
                    <Link to="/contact">
                        <Nav.Link id='navbarMain-option' href='/project' ><p>Projects <FaNetworkWired className='icons'  /></p></Nav.Link>
                    </Link>
                </Container>
            </Nav>
        </>

    )
}
