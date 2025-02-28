import React, { useState } from "react";
import Calendar from "react-calendar"; // Import the calendar component
import "react-calendar/dist/Calendar.css"; // Import calendar styles
import "./Calendar.css"; // Add your custom styles here

const CalendarPage = () => {
  const [date, setDate] = useState(new Date()); // State to hold the selected date
  const [todoList, setTodoList] = useState({}); // State to hold the To-Do items per date
  const [todoText, setTodoText] = useState(""); // State to hold the text of a new To-Do item

  // Handle date change
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Handle adding a new To-Do item
  const handleAddTodo = () => {
    if (!todoText.trim()) return; // Don't add empty To-Do items

    const dateString = date.toDateString(); // Use date as key in string format
    const newTodoList = { ...todoList };
    if (!newTodoList[dateString]) {
      newTodoList[dateString] = []; // Initialize an empty array if no To-Do items for this date
    }
    newTodoList[dateString].push(todoText.trim()); // Add the new To-Do item
    setTodoList(newTodoList);
    setTodoText(""); // Clear the input after adding
  };

  // Handle input change for the To-Do text
  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  // Get the To-Do items for the selected date
  const currentDateString = date.toDateString();
  const currentTodoItems = todoList[currentDateString] || [];

  return (
    <div className="calendar-page">
      <div className="calendar-section">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="calendar"
        />
      </div>

      <div className="todo-section">
        <h3>To-Do for {date.toDateString()}</h3>

        {/* Input field for adding new To-Do */}
        <div>
          <input
            type="text"
            value={todoText}
            onChange={handleInputChange}
            placeholder="Add a new to-do"
            className="todo-input"
          />
          <button onClick={handleAddTodo} className="add-todo-button">
            Add To-Do
          </button>
        </div>

        {/* Display the list of To-Do items for the selected date */}
        <ul>
          {currentTodoItems.length === 0 ? (
            <li className="no-todoitemtxt">No to-do items for this date</li>
          ) : (
            currentTodoItems.map((item, index) => <li key={index}>{item}</li>)
          )}
        </ul>
      </div>
    </div>
  );
};

export default CalendarPage;
