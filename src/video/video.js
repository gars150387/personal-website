
import React from 'react'
import videoSkating from '../video/skateboaring.mp4'
import videoSkating2 from '../video/skateboarding.mp4'
import { NavbarHeader } from '../components/Navbar'

import '../styles/video.css'


export const Video = () => {
  return (
    <div>
      <NavbarHeader />
      <video src={videoSkating} autoPlay loop muted />
      <video src={videoSkating2} autoPlay loop muted  />
    </div>
  )
}
