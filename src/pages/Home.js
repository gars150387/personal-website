import React, { useState } from 'react';
import { NavbarHeader } from '../components/Navbar';

import '../styles/Sass/home.scss'
import { Link } from 'react-router-dom';


export const Home = () => {

  const [showNavbar, setShowNavbar] = useState(false)
  const [showLetters, setShowLetters] = useState(true)

  return (
    <div className='body-container'>

      {showNavbar === false ? '' : (<div className='overlay'><NavbarHeader /></div>)}

      <div>
        <div className='home-box' onClick={() => (setShowNavbar(!showNavbar),setShowLetters(false))}>
          <Link to='/whoami'>
            {showLetters === true ? (<span id='container-render' className='animate__animated animate__pulse animate__infinite animate__slower'>G.A.R.S</span>) :
              <div className='navbar-after-click' ><p>G.A.R.S</p></div>}
          </Link>

        </div>

      </div>

    </div >
  )
}
