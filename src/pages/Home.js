import React, { useState } from 'react';
import { NavbarHeader } from '../components/Navbar';

import '../styles/video.css'
import '../styles/Sass/home.scss'


export const Home = () => {

  const [showNavbar, setShowNavbar] = useState(false)
  const [showLetters, setShowLetters] = useState(true)

  return (
    <div className='body-container'>

      {showNavbar === false ? '' : (<div className='overlay'><NavbarHeader /></div>)}

      <div>
        <div className='home-box' onClick={() => (setShowNavbar(!showNavbar),
          setShowLetters(false))}>
          {showLetters === true ? (<span className='animate__animated animate__pulse animate__infinite animate__slower'>G.A.R.S</span>) : <div className='navbar-after-click' ><p>G.A.R.S</p></div> }
      </div>
      {/* <div id='container-render'>
          <BackgroundResume />
        </div> */}
    </div>

    </div >
  )
}
