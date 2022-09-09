import React from 'react'
import './testimonials.css'
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.png";
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    name:'Cedi Osman',
    review:'Yorum yok'
  },
  {
    avatar:AVTR2,
    name:'Furkan Korkmaz',
    review:' Yorum yok'
  },
  {
    avatar:AVTR1,
    name:'Alperen Şengün',
    review:' Yorum yok'
  },
  {
    avatar:AVTR2,
    name:'Shane Larkin',
    review:' Yorum yok'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Hakkımdaki yorumlamalar</h5>
      <h2>Yorumlar</h2>
      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
      {
          data.map(({avatar,name,review},index)=>
          {
            return(
              <SwiperSlide className="testimonial">
               <div className="client__avatar">
                <img src={avatar} />          
               </div>
               <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials