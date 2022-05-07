import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

import { NavbarHeader } from '../components/Navbar'

import '../styles/whoami.css'

export const WhoAmI = () => {
    return (
        <div className='whoami-body'>
            <NavbarHeader />
            <br />

            <Row>
                <Col></Col>
                <Col xs lg={8} className='text-center'>
                    <Card.Title id='text1' style={{ margin: "2%", fontSize: '30px', fontFamily: "serif", fontWeight: '800' }}>
                        My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Must go faster. Hey, you know how I'm, like, always trying to save the planet? Here's my chance. What do they got in there? King Kong?
                        </Card.Title>
                        <Card.Title id='text2' style={{ margin: "2%", fontSize: '30px', fontFamily: "serif", fontWeight: '800' }}>
                            Must go faster. I was part of something special. Remind me to thank John for a lovely weekend. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? So you two dig up, dig up dinosaurs? You know what? It is beets. I've crashed into a beet truck.
                        </Card.Title>
                        <Card.Title id='text3' style={{ margin: "2%", fontSize: '30px', fontFamily: "serif", fontWeight: '800' }}>
                            Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. You really think you can fly that thing? I gave it a cold? I gave it a virus. A computer virus. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.
                        </Card.Title>
                        <Card.Title id='text4' style={{ margin: "2%", fontSize: '30px', fontFamily: "serif", fontWeight: '800' }}>
                            Remind me to thank John for a lovely weekend. I gave it a cold? I gave it a virus. A computer virus. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? So you two dig up, dig up dinosaurs? They're using our own satellites against us. And the clock is ticking.
                        </Card.Title>
                        <Card.Title id='text5' style={{ margin: "2%", fontSize: '30px', fontFamily: "serif", fontWeight: '800' }}>
                            I gave it a cold? I gave it a virus. A computer virus. God help us, we're in the hands of engineers. Do you have any idea how long it takes those cups to decompose. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Jaguar shark! So tell me - does it really exist?
                        </Card.Title>
                    
                </Col>
                <Col></Col>
            </Row>
        </div>

    )
}
