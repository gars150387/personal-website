import React from 'react'
import videoSkating from '../video/skateboaring.mp4'
import skate from '../video/skateboarding.mp4'
import { NavbarHeader } from '../components/Navbar'
import { Stack } from 'react-bootstrap'
import halfway from '../video/half-way.mp4'
import skate2 from '../video/skate.mp4'
import slidingdown from '../video/sliding-down.mp4'

import '../styles/video.css'
import '../styles/home.css'

export const Home = () => {
  return (
    <div className='overlay'>
      <NavbarHeader />
      <Stack direction='horizontal' className='mt-5' gap={4}>
        <video className='animate__animated animate__bounceInLeft animate__slow' src={slidingdown} autoPlay loop muted />
        <video className='animate__animated animate__bounceInRight animate__slow' src={skate} autoPlay loop muted />
      </Stack>
      <Stack direction='horizontal' gap={4} className='mt-4 animate__animated animate__bounceInUp animate__slow'>
        <video src={skate2} autoPlay loop muted />

        <video src={halfway} autoPlay loop muted />

      </Stack>

    </div>
  )
}
