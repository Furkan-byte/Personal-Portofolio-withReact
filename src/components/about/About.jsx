import React from 'react'
import './About.css'
import VS from '../../assets/vs.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Daha iyi tanımak için</h5>
      <h2>Hakkımda</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'></div>
          <img src={VS} alt="Image"></img>
        </div>
      </div>
    </section>
  )
}

export default About