import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';
import { FaCamera } from 'react-icons/fa';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">

        {/* Icon that links to photobooth */}
        <div className="header-icon" onClick={() => navigate('/photobooth')}>
          <FaCamera size={32} color="black" />
        </div>
        </header>

      <h1>Welcome to Anerie's Portfolio</h1>
      <button onClick={() => navigate('/project')}>Projects</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
      <button onClick={() => navigate('/aboutme')}>About Me</button>
      
    </div>
  );
}

export default App;
