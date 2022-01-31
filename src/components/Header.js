import React from 'react'
import './header.css'
import { Navbar } from './Navbar'
import {gsap} from "gsap"
import Headerright from './Header-right'
import Headerleft from './Header-left'
import Sponsors from './Sponsors'
import Cards from './Cards'

export default function Header() {

    return (
   <div>
<div className='header'>
  <div className="top">
  <Headerleft/>
  <Headerright />
  </div>

  <div className="bottom">
    <Sponsors />
  </div>



</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffc244" fill-opacity="1" d="M0,0L120,37.3C240,75,480,149,720,154.7C960,160,1200,96,1320,64L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
</svg>
</div>
    )
}
