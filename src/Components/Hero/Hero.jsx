import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import photo from "../../assets/my_photo.jpeg"
function Hero() {
  return (
    <div id='home' className='hero'>
      <img src={photo} alt="" />
      <h1><span>I'm Ajay </span>, a B.Tech graduate from MAIT.</h1>
      <p>Full-Stack Web Developer focused on creating modern, high-performance applications using MongoDB, Express, React, and Node.js.
I blend clean code with seamless design to craft powerful, end-to-end web solutions.</p>
      <div className='hero-section'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me </AnchorLink></div>
        <div className="hero-resume">
           <a href="https://drive.google.com/file/d/1SYDjF0OzgmlbmdFQoS1IyW4m1aASMTJb/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero