import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // this is your home
import Contact from './pages/contact';
import AboutMe from './pages/aboutme';
import Project from './pages/project';
import Photobooth from './pages/photobooth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/project" element={<Project />} />
        <Route path="/photobooth" element={<Photobooth />} />
      </Routes>
    </Router>
  );
}

export default App;
