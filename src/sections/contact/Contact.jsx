import {useRef} from 'react';
import contacts from './data';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dw90c8f', 'template_ev7qot6', form.current, 'xXTTgrHEQyG0WZL0X')
      .then((result) => {
          console.log(result.text);
          alert('email sent')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        Shoot me a message via any of the links below!
      </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
      <div className="my-form">
        <div className="form-container">
          <h2 className='--text-center'>Contact via form</h2>
          <form ref={form} onSubmit={sendEmail}
            className="--form-control --card
          --flex-center --dir-column">
            <input type="text"
            placeholder='Full Name'
            name='user_name' required />
            <input type="email"
            placeholder='Email'
            name='user_email' required />
            <input type="text"
            placeholder='Subject'
            name='subject' required />
            <textarea className='message' name="message" placeholder='message'
            id="" cols="30"
              rows="10"></textarea>
              <button type='submit' className='--btn--btn-primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact