import React from 'react';
import './Service.css'

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h1 className="sub-title">My <span>Services</span></h1>
        <div className="services-list">
          <div>
            <i className='bx bx-code' style={{ color: '#00eeff' }}></i>
            <h2>Web Design</h2>
            <p>Crafting visually stunning and user-friendly websites tailored to your unique needs. From clean layouts to responsive designs, I blend creativity with functionality to deliver a seamless digital experience that engages users and leaves a lasting impression. Let's bring your vision to life in online Designing.</p>
            <a href="#" className="read">Learn more</a>
          </div>
          <div>
            <i className='bx bx-crop' style={{ color: '#00eeff' }}></i>
            <h2>UI/UX Design</h2>
            <p>Designing intuitive and engaging user interfaces with a focus on enhancing user experience. I create seamless, aesthetically pleasing, and responsive designs that prioritize usability and accessibility, ensuring every interaction feels natural and enjoyable. Let's craft designs that truly connect with your audience!</p>
            <a href="#" className="read">Learn More</a>
          </div>
          <div>
            <i className='bx bxl-apple' style={{ color: '#00eeff' }}></i>
            <h2>Web Development</h2>
            <p>Building dynamic, fast, and secure websites using modern technologies and best practices. I specialize in creating scalable solutions tailored to your unique needs, ensuring seamless functionality and an outstanding user experience. From front-end interfaces to back-end systems, I bring your online vision to life with precision and care.</p>
            <a href="#" className="read">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
