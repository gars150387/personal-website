import React from 'react'
import { Stack, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavbarHeader } from '../components/Navbar'
import slidingdown from '../video/sliding-down.mp4'
import halfway from '../video/half-way.mp4'


import '../images/sanFranciscoTrip.jpg'
import '../images/carrying-a-skateboard.jpeg'
import '../styles/Sass/whoAmI.scss'

export const WhoAmI = () => {
    return (
        <div classNameName='whoami-body'>
            <NavbarHeader id='navbar-whoami' />
            <div>
            <Link to="/">
                    <Button className='button-home' variant='secondary' style={{
                        width: '50vw',
                    }}><h1>Home</h1></Button>
                </Link>
            </div>
            <Stack className="justify-content-center" direction='horizontal' gap={2}>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"><h1>Here who I am!</h1></h5>
                        <p className="card-text">Hi everyone, my name is Gustavo and I am a brand new Software Developer, all my background is based in Marketing and Management but I started to move my career toward my new goal as a professional.</p>
                        <p className="card-text">I started building my skillset as a software developer deciding to attempt a coding Bootcamp to get my basic fundamentals.</p>
                        <p className="card-text">I always look for new challenges to help me to grow as a person as professional</p>
                        <h5 className="card-title">This is how I enjoy my time</h5>
                        <p className="card-text">I consider myself an outdoor person, I like to go out and enjoy the nature around me. I like to go out and spend time skateboarding on the street or at the pump track.</p>
                        <p className="card-text">Also, I like to do skimboarding and enjoy the time on the beach and try to keep up a balanced way of life.</p>
                    </div>
                </div>
            </Stack>
            {/* <Stack className="justify-content-center" direction='horizontal' gap={1}>
                <div className="left-img">
                    <Card.Img id='imgWhoAmI-Left' src={require('../images/carrying-a-skateboard.jpeg')} alt="..." />
                </div>
                <div className="right-img">
                    <Card.Img id='imgWhoAmI-Right' src={require('../images/sanFranciscoTrip.jpg')} alt="..." />
                </div>
            </Stack> */}
            <div className='box'>
                    <textarea />
                    <textarea />
                </div>
            {/* <Stack classNam="justify-content-center video" direction="horizontal" gap={2}> */}
                

                {/* <video className='video animate__animated animate__bounceInLeft animate__slow' src={slidingdown} autoPlay loop muted /> */}
                {/* <video className="video" src={halfway} autoPlay loop muted /> */}
            {/* </Stack> */}
        </div>

    )
}
