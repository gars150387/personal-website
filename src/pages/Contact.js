import React from "react";
import { ContactMe } from "../components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import { NavbarHeader } from "../components/Navbar";


import '../styles/contact.css'


export const Contact = () => {
    return (
        <Container>
                        <NavbarHeader />
            <br />

            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Row>
                        <Col className="text-center">
                            <h3 id="contact-title">Let's chat, send me a message!</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="box-message">
                            <ContactMe/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    )
}

/*
                

                
*/