// src/App.js
import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'; // If using Bootstrap
import './styles.css';

const App = () => {
  return (
    <>
      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='experience'>
        <Experience />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </>
  );
};

export default App;

