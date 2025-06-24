import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

function AboutMe() {
  const navigate = useNavigate();

  return (
    <div
      className="AboutMe"
      style={{
        backgroundImage: "url('/img/about_me.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '40px',
        color: 'white',
        fontFamily: 'Fredoka, sans-serif',
      }}
    >
      <div className="top-right">
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>

      <h2>Who is Anerie?</h2>
    </div>
  );
}

export default AboutMe;
