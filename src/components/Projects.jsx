import React from 'react';
import './Projects.css'

const projects = [
      {
    img: '/assets/examhelper.png',
    title: 'Exam Helper',
    desc: 'Exam Helper for Students A smart and supportive web application designed to help students prepare for exams with confidence.',
    view: 'https://examhelpeer.netlify.app/',
    repo: 'https://github.com/jaganreddy22/Examhelper',
  },
  {
    img: '/assets/netflix.png',
    title: 'Netflix Clone',
    desc: 'A responsive Netflix clone built using HTML, CSS, and JavaScript.',
  
    repo: 'https://github.com/jaganreddy22/Netflix-Clone',
  },
  {
    img: '/assets/Food-Mama.png',
    title: 'Food App',
    desc: 'Simple Restaurant Web AppA clean and user-friendly web application that allows customers to view the restaurant’s menu, p lacefood orders, and make table reservations',

    repo: 'https://github.com/jaganreddy22/Food-Mama',
  },
  {
    img: '/assets/Ecommerce.png',
    title: 'E-commerce Website',
    desc: 'An interactive e-commerce website with product listings.',
   
    repo: 'https://github.com/jaganreddy22/Ecommerce-web',
  },
  {
    img: '/assets/Portfolio.png',
    title: 'Portfolio ',
    desc: 'Portfolio Website DescriptionA personal portfolio web application designed to showcase my skills, projects, and professional journey.',
    view: 'https://jaganport.netlify.app/',
    repo: 'https://github.com/jaganreddy22/MY-Portfolio',
  },
  
  {
    img: '/assets/Notes.png',
    title: 'Notes Web App',
    desc: 'Student Notes Web App A lightweight and intuitive web application designed to help students take, organize, and access their notes efficiently.',
    view: 'https://jagadesh-weather-app.netlify.app',
    repo: 'https://github.com/jaganreddy22/Note-Web-App',
  }
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="container">
      <div className="section-header">
        <h2>Latest <span>Projects</span></h2>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.img} alt={p.title} />
            <div className="project-overlay">
              <h5>WEB DEVELOPMENT</h5>
              <p>{p.desc}</p>
              <div className="project-links">
                <a href={p.view} className="project-link" target="_blank" rel="noreferrer">View Project</a>
                <a href={p.repo} className="github-link" target="_blank" rel="noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
