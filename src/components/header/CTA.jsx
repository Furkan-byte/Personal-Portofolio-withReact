import React from 'react'
import CV from '../../assets/CV_Furkan_YILDIRIM.pdf'

const Cta  = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Cv'mi indir</a>
        <a href="#contact" className='btn btn-primary'>İletişime geç</a>
    </div>
  )
}

export default Cta 