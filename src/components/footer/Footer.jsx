import React from 'react'
import './footer.css'
import {AiFillInstagram} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>FURKAN</a>

      <ul className='permalinks'>
        <li><a href="#">Furkan Yıldırım</a></li>
        <li><a href="#about">Hakkımda</a></li>
        <li><a href="#experience">Becerilerim</a></li>
        <li><a href="#services">Servisler</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Yorumlar</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/furkanyld5/?hl=tr"><AiFillInstagram/></a>
        <a href="https://twitter.com/oylerastgele"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Furkan Yıldırım. Bütün hakları saklıdır.</small>
      </div>
    </footer>
  )
}

export default Footer