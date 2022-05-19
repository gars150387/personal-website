import React from 'react'
import videoSkating from '../video/skateboaring.mp4'
import skate from '../video/skateboarding.mp4'
import { NavbarHeader } from '../components/Navbar'

import '../styles/video.css'
import { Stack } from 'react-bootstrap'
import '../styles/home.css'
import { Video } from '../video/video'

export const Home = () => {
  return (
    <div className='overlay'>
    <NavbarHeader />
    <Stack>
      <video src={videoSkating} autoPlay loop muted />

      <video src={skate} autoPlay loop muted />

    </Stack>
  </div>
  )
}
