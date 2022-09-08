import React from 'react'
import './services.css'
import bachelor from '../../assets/mezuniyet_Furkan_YILDIRIM.pdf' 
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id='services'>
      <h5>Size sağlayabileceklerim ve aldığım eğitimler-sertifikalar</h5>
      <h2>Servisler</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Size Sağlayabileceklerim</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Okunabilir kod dizimi</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Grup çalışmasına uyum</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Verilen taskleri zamanında yetiştirmek</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>SOLID prensibine uygun kodlama</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Tercihen hibrit ve remote çalışma modellerini ele alırım. Ancak iş yerinde çalışmak da tabii ki opsiyonlarım arasındadır.</p>
            </li>
          </ul>
        </article>
          {/* educations starts here */ }
        <article className="service">
          <div className="service__head">
            <h3>Eğitim</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>İstanbul Zaim Üniversitesi - Bilgisayar Mühendisliği</p>
              <br/>
              <p>AGNO : 2,82</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Complete guide to ASP.NET Core MVC (.NET 6)</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Senior Yazılım Geliştirici Yetiştirme Kampı (.NET) - Devam ediyor</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>TM .Net Core Back-End Bootcamp - Devam ediyor </p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Entertech .Net Core Back-End Bootcamp - Devam ediyor </p>
            </li>
          </ul>
        </article>

        {/* certificate starts here */}

        <article className="service">
          <div className="service__head">
            <h3>Sertifikalar</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <a href={bachelor} download>
                Üniversite mezuniyet belgesi - İndirme Linki
                </a>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <a href='https://www.udemy.com/certificate/UC-fa723273-e386-4468-b187-19d13ca6d7c9/' target='_blank'>
              Complete guide to ASP.NET Core MVC (.NET 6) - Bitirme Sertifikası
                </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services