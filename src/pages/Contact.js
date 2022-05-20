import React from "react";
import { ContactMe } from "../components/ContactForm";
import { Container, Row, Col, Card, Button, Stack } from "react-bootstrap";
import { NavbarHeader } from "../components/Navbar";


import '../styles/contact.css'


export const Contact = () => {
    return (
        <>
            <Container className="contact-container" fluid>
                <NavbarHeader />
                <Row className="mt-5">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Row>
                            <Col className="text-center">
                                <h3 id="contact-title">Let's chat, send me a message!</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{
                                width: '150%',
                                height: '150%'
                            }} className="box-message">
                                <ContactMe />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
            <Container>
                <Row>
                    <Col className="other-link">

                        <Card.Header><h1>Others link to contact me</h1></Card.Header>
                        <Stack direction="horizontal" gap={1} className="col-md-5 mx-auto">
                            <div>
                                    <Button id="button-socialMedia" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/garsanteliz' variant="secondary">LinkedIn</Button>
                            </div>
                            <div>
                                <Card.Body>
                                    <Button id="button-socialMedia"  target="_blank" rel="noopener noreferrer" href='https://www.github.com/gars150387' variant="dark">GitHub</Button>
                                </Card.Body>
                            </div>
                        </Stack>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

/*
                

                
*/