import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

function Project() {
  const navigate = useNavigate();

  return (
    <div className="Project">
      <h2>This is the Project page</h2>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default Project;
