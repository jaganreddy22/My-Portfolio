import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    emailjs.init("9F5yg6crwWzcL1jJx");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_z0ods1p', 'template_s7t8u9p', e.target)
      .then(() => {
        document.getElementById("success-message").style.display = "block";
        document.getElementById("error-message").style.display = "none";
        e.target.reset();
      }, () => {
        document.getElementById("success-message").style.display = "none";
        document.getElementById("error-message").style.display = "block";
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Contact <span>Me</span></h2>
        <h4>Let's Work Together</h4>
        <p>
          Whether you have a question, a project idea, or just want to say hello,
          I’d love to hear from you. I'm always excited to collaborate, learn new things,
          and take on creative challenges. Drop a message and I’ll get back to you as soon as possible!
        </p>
        <ul className="contact-list">
          <li><i className='bx bx-send'></i>bjaganmohanreddy22@gmail.com</li>
        </ul>
        <div className="contact-icons">
          <a href="https://www.facebook.com/share/14jqq6ExDp/" target="_blank" rel="noreferrer">
            <i className='bx bxl-facebook-circle'></i>
          </a>
          <a href="https://x.com/JaganMo28270812?t=mB8jeuH5Y5zMPqyOEA2x3A&s=09" target="_blank" rel="noreferrer">
            <i className='bx bxl-twitter'></i>
          </a>
          <a href="https://www.instagram.com/_mr__reddy_._/" target="_blank" rel="noreferrer">
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="https://www.linkedin.com/in/jagan-mohan-reddy-basireddy" target="_blank" rel="noreferrer">
            <i className='bx bxl-linkedin'></i>
          </a>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit} id="contact-form">
          <input type="text" name="name" placeholder="Enter Your Name" required />
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <textarea name="message" rows="10" placeholder="Enter Your Message" required></textarea>
          <input type="submit" value="Submit" className="send" />
          <div id="success-message" style={{ display: 'none', color: 'green', fontWeight: 'bold', marginTop: '10px' }}>
            Thank you! Your message has been sent successfully.
          </div>
          <div id="error-message" style={{ display: 'none', color: 'red', fontWeight: 'bold', marginTop: '10px' }}>
            Oops! Something went wrong. Please try again.
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
