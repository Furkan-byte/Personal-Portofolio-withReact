import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {MdOutlineWork} from 'react-icons/md'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav ==='#' ?'active':''}><AiTwotoneHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav ==='#about' ?'active':''}><SiAboutdotme/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav ==='#experience' ?'active':''}><MdOutlineWork/></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav ==='#services' ?'active':''}><MdOutlineMiscellaneousServices/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav ==='#contact' ?'active':''}><MdOutlineConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav