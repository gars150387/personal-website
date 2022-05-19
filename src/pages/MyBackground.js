import React from "react";
import { CertificationShow } from '../components/CertificationShow'
import { Stack, Col, Card, Button } from "react-bootstrap";

import '../styles/mybackground.css'
import { ScrollUp } from "../hooks/useScrollUp";
import { NavbarHeader } from "../components/Navbar";


export const MyBackground = (props) => {
    return (

        <div className="myBackground-body">
            <Stack>
                <NavbarHeader />
                <Col>
                    <Card.Title className="text-center"><h1><span>My Certificaions</span></h1></Card.Title>
                </Col>
                <ScrollUp />
                <CertificationShow key={props.id} />
            </Stack>
        </div>
    )
}