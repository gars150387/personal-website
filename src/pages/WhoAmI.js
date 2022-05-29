import React from 'react'
import { Stack } from 'react-bootstrap'
import { NavbarHeader } from '../components/Navbar'



import '../images/sanFranciscoTrip.jpg'
import '../images/carrying-a-skateboard.jpeg'
import '../styles/Sass/whoAmI.scss'

export const WhoAmI = () => {
    return (
        <div classNameName='whoami-body'>
            <div className='navbar-after-click' ><p>G.A.R.S</p></div>
            <NavbarHeader id='navbar-whoami' />

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
            <div className='box'>
                    <textarea />
                    <textarea />
                </div>
        </div>

    )
}
