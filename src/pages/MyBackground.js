import React from "react";
import { CertificationShow } from '../components/CertificationShow'
import { Stack, Col, Card } from "react-bootstrap";

import '../styles/mybackground.css'
import { ScrollUp } from "../hooks/useScrollUp";


export const MyBackground = (props) => {
    return (

        <div className="myBackground-body">
            <Stack>
                <Col>
                    <Card.Title className="text-center"><h1><span>My Certificaions</span></h1></Card.Title>
                </Col>
                <ScrollUp />
                <CertificationShow key={props.id} />
            </Stack>
        </div>
    )
}