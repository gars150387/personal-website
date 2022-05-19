import React from "react";
import { ContactMe } from "../components/ContactForm";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
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
            <Col md={{ span: 6, offset: 3 }}>
                
                <Card.Header><h1>Others link to contact me</h1></Card.Header>
                <Card style={{
                    width: '32vw',
                    position: 'absolute',
                    left: '34%',
                    color: 'white',
                }}>
                    <Card.Body style={{
                        width: '10vw'
                    }}>
                        <Card.Title>LinkedIn</Card.Title>
                        <Button target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/garsanteliz' variant="primary">CLick here</Button>
                    </Card.Body>
                    <hr />
                    <Card.Body>
                        <Card.Title>GitHub</Card.Title>
                        <Button target="_blank" rel="noopener noreferrer"  href='https://www.github.com/gars150387' variant="primary">CLick here</Button>
                    </Card.Body>
                </Card>
            </Col>
            </Row>

        </Container>

        </>
    )
}

/*
                

                
*/