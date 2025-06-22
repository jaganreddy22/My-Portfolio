import React from 'react';
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="sub-title">My <span>Skills</span></h1>
      <div className="container1">
        <h1 className="heading1">Technical Skills</h1>
        <div className="Technical-bar">
          {[
            { name: 'HTML', icon: 'bxl-html5', color: '#c95d2e', class: 'html' },
            { name: 'CSS', icon: 'bxl-css3', color: '#147bbc', class: 'css' },
            { name: 'JavaScript', icon: 'bxl-javascript', color: '#b0bc1e', class: 'javascript' },
            { name: 'Python', icon: 'bxl-python', color: '#c32ec9', class: 'python' },
            { name: 'React', icon: 'bxl-react', color: '#69bcbc', class: 'react' },
          ].map((skill, index) => (
            <div className="bar" key={index}>
              <i style={{ color: skill.color }} className={`bx ${skill.icon}`}></i>
              <div className="info"><span>{skill.name}</span></div>
              <div className={`progress-line ${skill.class}`}><span></span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="container1">
        <h1 className="heading1">Professional Skills</h1>
        <div className="radial-bars">
          {[
            { label: 'Creativity', percent: '90%' },
            { label: 'Communication', percent: '90%' },
            { label: 'Problem Solving', percent: '85%' },
            { label: 'Team Work', percent: '90%' },
          ].map((item, i) => (
            <div className="radial-bar" key={i}>
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80" />
                <circle className={`path path-${i + 1}`} cx="100" cy="100" r="80" />
              </svg>
              <div className="percentage">{item.percent}</div>
              <div className="text">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
