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
      <a href='#' className={activeNav ==='#' ?'active':''}><AiTwotoneHome/></a>
      <a href='#about'><SiAboutdotme/></a>
      <a href='#experience'><MdOutlineWork/></a>
      <a href='#services'><MdOutlineMiscellaneousServices/></a>
      <a href='#contact'><MdOutlineConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav