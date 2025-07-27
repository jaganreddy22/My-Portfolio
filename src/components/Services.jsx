import React from 'react';
import './Service.css';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h1 className="sub-title">My <span>Services</span></h1>
        <div className="services-list">
          <div>
            <i className='bx bx-code' style={{ color: '#00eeff' }}></i>
            <h2>Web Design</h2>
            <p>
              Crafting visually stunning and user-friendly websites tailored to your unique needs...
            </p>
            <button className="read" onClick={() => alert('Learn more about Web Design')}>
              Learn More
            </button>
          </div>

          <div>
            <i className='bx bx-crop' style={{ color: '#00eeff' }}></i>
            <h2>UI/UX Design</h2>
            <p>
              Designing intuitive and engaging user interfaces with a focus on enhancing user experience...
            </p>
            <button className="read" onClick={() => alert('Learn more about UI/UX Design')}>
              Learn More
            </button>
          </div>

          <div>
            <i className='bx bxl-apple' style={{ color: '#00eeff' }}></i>
            <h2>Web Development</h2>
            <p>
              Building dynamic, fast, and secure websites using modern technologies and best practices...
            </p>
            <button className="read" onClick={() => alert('Learn more about Web Development')}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
