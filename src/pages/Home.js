import React from 'react'
import { NavbarHeader } from '../components/Navbar'
import { BackgroundResume } from '../components/backgroundResume'

import '../styles/video.css'
import '../styles/Sass/home.scss'



export const Home = () => {
  return (
    <div className='body-container'>
      <div className='overlay'>
        <NavbarHeader />
      </div>
      <div>
        <div className='home-box'>
          <span>Welcome</span>
        </div>
        {/* <div id='container-render'>
          <BackgroundResume />
        </div> */}
      </div>

    </div>
  )
}
