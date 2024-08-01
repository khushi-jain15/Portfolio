import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <div className="contanier"> <Home/> </div>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
