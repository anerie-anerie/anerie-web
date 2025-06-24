import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

function Project() {
  const navigate = useNavigate();

  return (
    <div className="Project">
      <div className="top-right">
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>

      <h2>Check out all the cool projects I've done </h2>
      <h2>Always more to come...</h2>
      
      <div className="project_box">
        Slay in a Snap
        - context (made with xyz @ __)
        - win something?
        - video of demo
        - github link

      </div>
      
      <div className="project_box">
        Robotics Team Website
      </div>

      <div className="project_box">
        PosturePerfect
      </div>

      <div className="project_box">
        Lunarhacks Website
      </div>

      <div className="project_box">
        Iron Will
      </div>

      <div className="project_box">
        Nerd or Lovebird
      </div>
      
    </div>
  );
}

export default Project;
