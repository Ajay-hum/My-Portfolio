import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <section className='contact container'>
      <h2>Contact</h2>
      <form action="https://formsubmit.co/justuschimeremueze@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <p>Connect with me on <a href="https://github.com/Ajay-hum">GitHub</a> and <a href="https://linkedin.com/in/justus-asogwa-726427293">LinkedIn</a>.</p>
    </section>
  );
};

export default Contact;
