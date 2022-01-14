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
  <path fill="#ffc244" fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,80C384,128,480,224,576,224C672,224,768,128,864,112C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
</div>
    )
}
