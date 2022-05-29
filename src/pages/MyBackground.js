import React from "react";
import { CertificationShow } from '../components/CertificationShow'
import { Stack, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import '../styles/Sass/background.scss'
import { ScrollUp } from "../hooks/useScrollUp";
import { NavbarHeader } from "../components/Navbar";


export const MyBackground = (props) => {
    return (

        <div className="myBackground-body">
            <div className='navbar-after-click' ><p>G.A.R.S</p></div>
            <Stack>
            
                <NavbarHeader className='navbar-background'/>
     
                <Col>
                    <Card.Title className="card-title text-center"><h1>My Certifications</h1></Card.Title>
                </Col>
                <ScrollUp />
                <CertificationShow key={props.id} />
            </Stack>
        </div>
    )
}