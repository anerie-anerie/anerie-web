import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

function Contact() {
    const navigate = useNavigate();

  return (
    <div className="Contact">
        <h2>This is the Contact page</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default Contact;
