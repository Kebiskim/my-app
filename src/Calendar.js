import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import the calendar component
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import './Calendar.css'; // Add your custom styles here
import "./index.css"; // You can style your page with a CSS file

const CalendarPage = () => {
  const [date, setDate] = useState(new Date()); // State to hold the selected date
  const [activeStartDate, setActiveStartDate] = useState(new Date()); // State to hold the calendar's view start date
  const [todoList, setTodoList] = useState({}); // State to hold the To-Do items per date
  const [todoText, setTodoText] = useState(""); // State to hold the text of a new To-Do item

  // Handle date change
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Handle active start date change (for when you switch months)
  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setActiveStartDate(activeStartDate);
  };

  // Handle "Go to Today" button click
  const handleGoToToday = () => {
    const today = new Date();
    setDate(today); // Update the selected date
    setActiveStartDate(today); // Move the calendar view to today's month
  };
  
  // Handle adding a new To-Do item
  const handleAddTodo = () => {
    if (!todoText.trim()) return; // Don't add empty To-Do items

    const dateString = date.toDateString(); // Use date as key in string format
    const newTodoList = { ...todoList };
    if (!newTodoList[dateString]) {
      newTodoList[dateString] = []; // Initialize an empty array if no To-Do items for this date
    }
    newTodoList[dateString].push({ text: todoText.trim(), checked: false }); // Add the new To-Do item with checked state
    setTodoList(newTodoList);
    setTodoText(""); // Clear the input after adding
  };

  // Handle input change for the To-Do text
  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  // Toggle the checked state of a To-Do item
  const toggleTodoChecked = (index) => {
    const dateString = date.toDateString();
    const newTodoList = { ...todoList };
    const currentTodoItems = newTodoList[dateString];
    currentTodoItems[index].checked = !currentTodoItems[index].checked;
    setTodoList(newTodoList);
  };

  // Get the To-Do items for the selected date
  const currentDateString = date.toDateString();
  const currentTodoItems = todoList[currentDateString] || [];

  return (
    <div className='calendar-page gb-display-flex'>
        <div className="calendar-container">
                  
        {/* Calendar Component */}
        <Calendar
          onChange={handleDateChange}
          value={date}
          activeStartDate={activeStartDate} // Set the active start date for the calendar view
          onActiveStartDateChange={handleActiveStartDateChange} // Update the active start date when the calendar view changes
          className="calendar"
        />

        {/* Button to go to today's date */}
        <button onClick={handleGoToToday} className="today-button gb-text-align-center gb-border-radius gb-color-font-bright gb-color-background-gray">
          Go to Today
        </button>

        <div className="todo-container">
            <h3>{date.toDateString()}</h3>

        {/* Input field for adding new To-Do */}
        <div className="input-container gb-display-flex">
          <input
            type="text"
            value={todoText}
            onChange={handleInputChange}
            onKeyPress={(e) => { if (e.key === 'Enter') handleAddTodo(); }} // Listen for Enter key press
            placeholder="Add a new to-do"
            className="todo-input"
            maxLength={24}
          />
          <button onClick={handleAddTodo} className="add-todo-button gb-color-background-gray">+</button>
        </div>


            {/* Display the list of To-Do items for the selected date */}
            <ul>
            {currentTodoItems.length === 0 ? (
                <li className="no-todoitemtxt">No to-do items for this date</li>
            ) : (
                currentTodoItems.map((item, index) => (
                <li key={index} className="todo-item gb-display-flex">
                    <input 
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleTodoChecked(index)} // Toggle checked state
                    className="todo-checkbox"
                    />
                    {item.text}
                </li>
                ))
            )}
            </ul>
        </div>
        </div>
    </div>
  );
};

export default CalendarPage;
