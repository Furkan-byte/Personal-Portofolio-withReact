import React from 'react'
import './experience.css'
import { BsFillCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Bilgili ve Tecrübeli olduğum konular</h5>
      <h2>Becerilerim</h2>

      <div className="container experience__container">
        <div className="experience__backend">
            <h3>Backend</h3>
            <div className="experience__content">
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                   <h4>.NET</h4>
                   <small className='text-light'>İyi Seviye</small>   
                   </div>
            
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                   <h4>.NET Core</h4>
                   <small className='text-light'>İyi Seviye</small> 
                   </div>
              
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                   <h4>C#</h4>
                   <small className='text-light'>İyi Seviye</small>  
                   </div>
             
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                   <h4>ASP.NET MVC</h4>
                   <small className='text-light'>İyi Seviye</small> 
                   </div>
              
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                   <h4>Entity Framework Core</h4>
                   <small className='text-light'>Orta Seviye</small>   
                   </div>
                            
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                   <h4>Identity</h4>
                   <small className='text-light'>Orta Seviye</small>     
                   </div>
                            
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                   <h4>Web APİ</h4>
                   <small className='text-light'>Giriş seviyesi - Öğrenim Aşaması</small>
                   </div>
                                  
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/>
                   <div>
                   <h4>N-tier Architecture</h4>
                   <small className='text-light'>Orta Seviye</small> 
                    </div> 
                                 
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/>
                   <div>
                   <h4>Repository Pattern</h4>
                   <small className='text-light'>İyi Seviye</small>
                    </div>                              
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/>
                   <div>
                   <h4>Unit TEST</h4>
                   <small className='text-light'>Giriş seviyesi</small>
                    </div>             
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                   <h4>Mssql</h4>
                   <small className='text-light'>Giriş Seviye</small>
                   </div>                                 
              </article>
            </div>
        </div>


        <div className="experience__frontend">
           <h3>Frontend</h3>
           <div className="experience__content">
           <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                    <h4>HTML</h4>
                   <small className='text-light'>Orta Seviye</small>               
                   </div>

              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                   <h4>CSS</h4>
                   <small className='text-light'>Giriş Seviye</small>
                   </div>                             
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                   <h4>JavaScript</h4>
                   <small className='text-light'>Giriş Seviye</small>  
                   </div>             
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/> 
                   <div>
                   <h4>Bootstrap 5.2</h4>
                   <small className='text-light'>Orta Seviye</small>
                   </div>                                
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/>
                   <div>
                   <h4>React JS</h4>
                   <small className='text-light'>Giriş Seviye</small>
                    </div>                                  
              </article>
              <article className='experience__details'>
                   <BsFillCheckCircleFill className='experience__details-icon'/>
                   <div>
                   <h4>AJAX</h4>
                   <small className='text-light'>Giriş Seviye</small>
                    </div>                                   
              </article>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Experience