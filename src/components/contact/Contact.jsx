import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();



    emailjs.sendForm('service_wl3kpil', 'template_2rrop5z', form.current, '9rBEqPe1CIqM1K1u9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>İrtibata geçebilirsiniz</h5>
      <h2>Bana Ulaşın</h2>
      <div className="container contact__container">
        <div className="contact__options">
           <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yildirimfurkan57@gmail.com</h5>
            <a href="mailto:yildirimfurkan57@gmail.com" target='_blank'>Mail atın!</a>
           </article>
           <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>LinkedIn sitesinden bana ulaşın!</h5>
            <a href="https://www.linkedin.com/in/furkan-yildirim-5385b81a5/" target='_blank'>İletişim Kur!</a>
           </article>
        </div>
        {/* End of contact option*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Tam isminiz..' required/>
          <input type="email" name='email' placeholder='Emailiniz..' required/>
          <textarea name="message" rows="7" placeholder='Bana mail göndermek istediğiniz mesajınız..' required></textarea>
          <button type='submit' className='btn btn-primary'>Mesajını at</button>
        </form>
      </div>
    </section>
  )
}

export default Contact