import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { NavbarHeader } from '../components/Navbar'

import '../images/sanFranciscoTrip.jpg'
// import { NavbarHeader } from '../components/Navbar'

import '../styles/whoami.css'

export const WhoAmI = () => {
    return (
        <div className='whoami-body'>
            <NavbarHeader />
            <Row>
                <Col></Col>
                <Col xs lg={8} className='text-center'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={require('../images/sanFranciscoTrip.jpg')} className="img-fluid rounded-center" alt="" />
                            </div>
                        </div>
                    </div>

                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
            <Col xs lg={8} className='text-center'>
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={require('../images/sanFranciscoTrip.jpg')} className="img-fluid rounded-end" alt="" />
                            </div>
                        </div>
                    </div>

                </Col>
                <Col></Col>
            </Row>
        </div>

    )
}
