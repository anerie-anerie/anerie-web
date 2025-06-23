import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Welcome to My Website</h1>
      <button onClick={() => navigate('/contact')}>Contact</button>
      <button onClick={() => navigate('/hobbies')}>Hobbies</button>
      <button onClick={() => navigate('/project')}>Projects</button>
    </div>
  );
}

export default App;
