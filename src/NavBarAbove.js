// src/NavBarAbove.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarAbove.css';

const NavBarAbove = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/todo" className="nav-item">Todo</Link>
        <Link to="/calendar" className="nav-item">Calendar</Link>
        <Link to="/tasks" className="nav-item">Tasks</Link>
      </div>
      
      <div className="navbar-right">
        <img className="profile-image" src="https://via.placeholder.com/40" alt="Profile" />
      </div>
    </div>
  );
};

export default NavBarAbove;
