import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <p href="#" className="logo"><span>De</span>veloper</p>
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="bx bx-menu"></i>
      </div>
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <a href="#home" style={{ '--i': 1 }}>Home</a>
        <a href="#about" style={{ '--i': 2 }}>About</a>
        <a href="#services" style={{ '--i': 3 }}>Services</a>
        <a href="#skills" style={{ '--i': 4 }}>Skills</a>
        <a href="#projects" style={{ '--i': 5 }}>Projects</a>
        <a href="#contact" style={{ '--i': 6 }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
