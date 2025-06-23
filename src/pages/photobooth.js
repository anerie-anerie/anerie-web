import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

function Photobooth() {
    const navigate = useNavigate();
  return (
    <div className="App">
      <h2> Welcome to the Photobooth Page</h2>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default Photobooth;
