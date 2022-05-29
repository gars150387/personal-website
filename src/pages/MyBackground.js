import React from "react";
import { CertificationShow } from '../components/CertificationShow'
import { Stack, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import '../styles/mybackground.css'
import { ScrollUp } from "../hooks/useScrollUp";
import { NavbarHeader } from "../components/Navbar";


export const MyBackground = (props) => {
    return (

        <div className="myBackground-body">
            <Stack>
                <NavbarHeader className='navbar-background'/>
                <div>
                <Link to="/">
                    <Button className='button-home' variant='secondary' style={{
                        width: '50vw',
                    }}><h1>Home</h1></Button>
                </Link>
                </div>
                <Col>
                    <Card.Title className="text-center"><h1>My Certifications</h1></Card.Title>
                </Col>
                <ScrollUp />
                <CertificationShow key={props.id} />
            </Stack>
        </div>
    )
}