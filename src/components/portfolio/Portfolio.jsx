import React from 'react'
import './portfolio.css'
import heavenofbook from '../../assets/heavenofbooks.png'
import flytonotdie from '../../assets/planegame.png'
import portfolioo from '../../assets/portfolio.png'

const data = [
  {
    id:1,
    image: heavenofbook,
    title: 'HeavenofBook e-Ticaret web sitesi',
    github:'https://github.com/Furkan-byte/HeavenofBooks'
  },
  {
    id:2,
    image: flytonotdie,
    title: 'FlyNotToDie - Uçağınızla birlikte kulelerden kaçın!',
    github:'https://github.com/Furkan-byte/Web-Javascript-Oyunu'
  },
  {
    id:3,
    image: portfolioo,
    title: 'Kendi portfolyo sitem - Bu site',
    github: 'https://github.com/Furkan-byte/Personal-Portofolio-withReact'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Son Çalışmalarım</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
          {
            data.map(({id,image,title,github}) => {
              return(
                <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
             <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github Code</a>
          </div>
        </article>
              )
            })
          }     
      </div>
    </section>
  )
}

export default Portfolio