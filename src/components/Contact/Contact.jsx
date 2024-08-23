import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <section className='contact container'>
      <h2 data-aos="fade-left" data-aos-duration="1000">Contact</h2>
      <form action="https://formsubmit.co/justuschimeremueze@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Your Name" required data-aos="fade-left" data-aos-duration="1500"/>
        <input type="email" name="email" placeholder="Your Email" required data-aos="fade-left" data-aos-duration="2000"/>
        <textarea name="message" placeholder="Your Message" required data-aos="fade-left" data-aos-duration="2500"></textarea>
        <button type="submit" data-aos="fade-left" data-aos-duration="3000">Send</button>
      </form>
      <p data-aos="fade-left" data-aos-duration="3500">Connect with me on <a href="https://github.com/Ajay-hum">GitHub</a> and <a href="https://linkedin.com/in/justus-asogwa-726427293">LinkedIn</a>.</p>
    </section>
  );
};

export default Contact;
