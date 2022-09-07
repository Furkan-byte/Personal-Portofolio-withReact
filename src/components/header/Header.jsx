import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>           
      <div className="container header__container">
        <h5>Merhaba, Ben</h5>
        <h1>Furkan Yıldırım</h1>
        <h5 className="text-light">.Net Developer(WEB)</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="Furkan"/>
        </div>  
        <a href="#contact" classname='scroll__down'>Go to bottom</a>      
      </div>
    </header>
  )
}

export default Header