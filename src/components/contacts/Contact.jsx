import {React ,useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lrb64cc', 'template_dozgosl', form.current,  'qDZC_NJOvMS7uMX1o')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>olaoyetijani12@gmail.com</h5>
            <a href="mailto:olaoyetijani12@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>olaoye_tijani</h5>
            <a href="https://www.instagram.com/olaoye_tijani/" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348166952851</h5>
            <a href="https://api.whatsapp.com/send?phone=[+2348166952851]" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact