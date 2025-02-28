import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarAbove.css';

const NavBarAbove = () => {
  const handleDarkModeToggle = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="navbar sticky-nav">
      <div className="navbar-left">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/todo" className="nav-item">Todo</Link>
        <Link to="/calendar" className="nav-item">Calendar</Link>
        <Link to="/tasks" className="nav-item">Tasks</Link>
      </div>
      
      <div className="navbar-right">
        <img className="profile-image" src="https://via.placeholder.com/40" alt="Profile" />
        <button 
          className="dark-mode-toggle" 
          onClick={handleDarkModeToggle} 
          aria-label="Toggle Dark Mode"
        >
          🌙
        </button>
      </div>
    </div>
  );
};

export default NavBarAbove;
