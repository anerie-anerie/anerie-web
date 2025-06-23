import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // this is your home
import Contact from './pages/contact';
import Hobbies from './pages/hobbies';
import Project from './pages/project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
