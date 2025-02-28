// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarAbove from './NavBarAbove'; // Import NavBarAbove
import Home from './Home';
import Todo from './Todo';
import CalendarPage from './Calendar'; // Make sure you import the correct CalendarPage
import Tasks from './Tasks';

const App = () => {
  return (
    <Router>
      <div>
        <NavBarAbove /> {/* Render the NavBarAbove component */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/calendar" element={<CalendarPage />} /> {/* This route should match the Calendar path */}
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
