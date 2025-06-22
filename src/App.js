import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
