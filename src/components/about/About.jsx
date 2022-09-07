import React from 'react'
import './About.css'
import VS from '../../assets/vs.png'
import {CgWorkAlt} from 'react-icons/cg'
import {MdCastForEducation} from 'react-icons/md'
import {SiHtml5} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Daha iyi tanımak için</h5>
      <h2>Hakkımda</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={VS} alt="Image"></img>
          </div>
        </div>

        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <CgWorkAlt className='about__icon'/>
            <h5>Tecrübe</h5>
            <small>2 Ay Staj - 1 Yıl Asp.Net Çalışmaları</small>
          </article>
          <article className='about__card'>
            <MdCastForEducation className='about__icon'/>
            <h5>Eğitim ve Kurslar</h5>
            <small>3+</small>
          </article>
          <article className='about__card'>
            <SiHtml5 className='about__icon'/>
            <h5>Projeler</h5>
            <small>5+ Tamamlanan</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem debitis sapiente ratione fuga pariatur veniam molestias odit in, asperiores cupiditate odio nulla perspiciatis voluptas! Facere explicabo sequi repudiandae architecto iure.
        </p>

        <a href="#contact" className='btn btn-primary'>İletişime geçin</a>
      </div>
      </div>     
    </section>
  )
}

export default About