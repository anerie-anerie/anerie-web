import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

function Hobbies() {
    const navigate = useNavigate();

  return (
    <div className="Hobbies">
    <h2>This is the hobbies page</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
    </div>

  );
}

export default Hobbies;
