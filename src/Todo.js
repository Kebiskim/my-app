import React, { useState } from "react";
import './Todo.css'; // Add your CSS for styling
import "./index.css"; // You can style your page with a CSS file

const Todo = () => {
  // State to store the to-do lists, each with tasks and checkboxes
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);

  // Handle changes in the to-do input field
  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  // Handle changes in the task input field
  const handleTaskInputChange = (event) => {
    setTaskText(event.target.value);
  };

  // Add a new to-do list
  const handleAddTodo = () => {
    if (todoText) {
      setTodoList([...todoList, { text: todoText, tasks: [], checked: false }]);
      setTodoText('');
    }
  };

  // Add a task to the selected to-do
  const handleAddTask = () => {
    if (taskText && currentTodoIndex !== null) {
      const updatedTodoList = [...todoList];
      updatedTodoList[currentTodoIndex].tasks.push({ text: taskText, checked: false });
      setTodoList(updatedTodoList);
      setTaskText('');
    }
  };

  // Toggle task's checked state
  const toggleTaskChecked = (todoIndex, taskIndex) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[todoIndex].tasks[taskIndex].checked = !updatedTodoList[todoIndex].tasks[taskIndex].checked;
    setTodoList(updatedTodoList);
  };

  // Set the current to-do index to add tasks
  const selectTodo = (index) => {
    setCurrentTodoIndex(index);
  };

  return (
    <div className="todo-container gb-text-align-center">
      <h1>To-Do List</h1>

        {/* Input field for adding new To-Do */}
        <div className="input-container">
          <input
            type="text"
            value={todoText}
            onChange={handleInputChange}
            onKeyPress={(e) => { if (e.key === 'Enter') handleAddTodo(); }} // Listen for Enter key press
            placeholder="Add a new to-do"
            className="todo-input"
            maxLength={24}
          />
          <button onClick={handleAddTodo} className="add-todo-button">+</button>
        </div>

      {/* Display the list of To-Do items */}
      <div className="todo-lists">
        {todoList.length === 0 ? (
          <p className="no-todoitemtxt">No to-do lists added yet.</p>
        ) : (
          <ul>
            {todoList.map((todo, todoIndex) => (
              <li key={todoIndex} className="todo-list-item">
                <div onClick={() => selectTodo(todoIndex)} className="todo-list-header">
                  <h2>{todo.text}</h2>
                  <button className="add-task-button">Add Task</button>
                </div>

                {/* Display tasks for the selected To-Do */}
                {currentTodoIndex === todoIndex && (
                  <div>
                    <input
                      type="text"
                      value={taskText}
                      onChange={handleTaskInputChange}
                      placeholder="Add a task"
                      className="task-input"
                    />
                    <button onClick={handleAddTask} className="add-task-button">Add Task</button>

                    <ul>
                      {todo.tasks.length === 0 ? (
                        <li className="no-task-item">No tasks for this to-do</li>
                      ) : (
                        todo.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="task-item">
                            <input
                              type="checkbox"
                              checked={task.checked}
                              onChange={() => toggleTaskChecked(todoIndex, taskIndex)}
                              className="task-checkbox"
                            />
                            {task.text}
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Todo;
