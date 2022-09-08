import React from 'react'
import CV from '../../assets/CV_Furkan_YILDIRIM.pdf'

const Cta  = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Cv'mi indirin</a>
        <a href="#contact" className='btn btn-primary'>İletişime geçin</a>
    </div>
  )
}

export default Cta 