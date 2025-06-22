import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css'

const Home = () => {
  useEffect(() => {
  const typed = new Typed(".text", {
    strings: ["Frontend Developer", "Student", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  return () => {
    typed.destroy(); // cleanup to prevent memory leaks
  };
}, []);


  return (
    <section
  className="home"
  style={{
    backgroundImage: "url('/assets/jaganlogo.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>

      <div className="home-content">
        <h3>Hello, It's Me</h3>
        
        <h1>B Jagan Mohan Reddy</h1>
        <h3>And I'm a <span className="text"></span></h3>
        <p>
          Visionary web developer crafting breathtaking digital experiences. <br />
          Expertise in HTML, CSS, JavaScript. Passion for innovation and perfection.
        </p>
        <div className="home-sci">
  <a href="https://www.facebook.com/share/14jqq6ExDp/" target="_blank" rel="noreferrer" style={{ '--i': 7 }}>
    <i className='bx bxl-facebook'></i>
  </a>
  <a href="https://www.instagram.com/_mr__reddy_._/" target="_blank" rel="noreferrer" style={{ '--i': 8 }}>
    <i className='bx bxl-instagram'></i>
  </a>
  <a href="https://wa.me/9392500971" target="_blank" rel="noreferrer" style={{ '--i': 9 }}>
    <i className='bx bxl-whatsapp'></i>
  </a>
  <a href="https://www.linkedin.com/in/jagan-mohan-reddy-basireddy" target="_blank" rel="noreferrer" style={{ '--i': 10 }}>
    <i className='bx bxl-linkedin'></i>
  </a>
</div>

        <a href="/assets/Resume.pdf" className="btn-box" download>Download CV</a>
      </div>
    </section>
  );
};

export default Home;
