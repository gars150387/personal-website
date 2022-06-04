import React from "react";
import { ContactMe } from "../components/ContactForm";
import { Col, Button } from "react-bootstrap";
import { NavbarHeader } from "../components/Navbar";

import '../styles/Sass/contact.scss'


export const Contact = () => {
    return (
        <>
            <div className='navbar-after-click' ><p>G.A.R.S</p></div>
            <NavbarHeader className='navbar-contact' />
            <div className="box-message-title">
                <h3>Let's chat, send me a message!</h3>
            </div>
            <Col className="box-message">
                <ContactMe />
            </Col>
            <div className="other-way-of-contact-box">
                <div className="other-link">
                    <h1>Others link to contact me</h1>
                </div>

                <Col className="other-link-button">
                    <div>
                        <Button id="button-socialMedia" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/garsanteliz' variant="secondary">LinkedIn</Button>
                    </div>
                    <div>
                        <Button id="button-socialMedia" target="_blank" rel="noopener noreferrer" href='https://www.github.com/gars150387' variant="dark">GitHub</Button>
                    </div>
                </Col>
            </div>

        </>
    )
}
