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
                    <div className="card mb-3" 
                    // style="max-width: 540p;"
                    >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={require('../images/sanFranciscoTrip.jpg')} className="img-fluid rounded-center" alt="" />
                            </div>
                            <div id='card-body' className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Hi Every one!</h5>
                                    <p className="card-text">My name is Gustavo and I am a Software Developer <br/>
                                    I started in my career with a Bachelor Degree in Marketing. <br/>
                                    and after few years I decided to move toward to teh tech industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
            <Col xs lg={8} className='text-center'>
                    <div className="card mb-3" 
                    style={{maxWidth: '35vw'}}
                    >
                        <div className="row g-0">
                            <div id='card-body' className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Hi Every one!</h5>
                                    <p className="card-text">My name is Gustavo and I am a Software Developer <br/>
                                    I started in my career with a Bachelor Degree in Marketing. <br/>
                                    and after few years I decided to move toward to teh tech industry.
                                    </p>
                                </div>
                            </div>
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
