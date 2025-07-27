import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/assets/jaganlogo2.png" alt="About Me" />
      </div>
      <div className="about-text">
        <h2>About<span> Me</span></h2>
        <h4>Full stack WebDeveloper!</h4>
        <p>
         I am a passionate second-year computer science student with expertise in HTML, CSS, JavaScript, React.js, and Python, specializing in building sleek, responsive web applications with dynamic user experiences. From developing a Netflix clone to creating real-time weather apps and interactive to-do lists, my projects showcase my ability to write clean, efficient code and work with APIs. Proficient in Git and UI/UX principles, I am always eager to learn and explore new technologies. Aspiring to be a full-stack developer, I seek opportunities to collaborate, innovate, and contribute to impactful projects. Let's connect and build something amazing!
        </p>
     <button className="btn-box" onClick={() => alert("More About Me clicked!")}>
  More About Me
</button>


      </div>
    </section>
  );
};

export default About;
