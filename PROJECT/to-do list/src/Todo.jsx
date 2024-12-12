/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import './App.css'; // Optional, for custom styling

function App() {
  const [tasks, setTasks] = useState([]); // To store the list of tasks
  const [taskInput, setTaskInput] = useState(''); // To store the input value
  const inputRef = useRef(null); // Reference to the input field to focus after adding a task

  // Function to handle adding a task
  const addTask = () => {
    if (taskInput.trim() === '') return; // Prevent adding empty tasks
    const newTask = {
      id: Date.now(), // Using timestamp as a unique id
      text: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput(''); // Clear the input field after adding
    inputRef.current.focus(); // Focus the input field
  };

  // Function to handle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to handle task deletion
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      
      <div className="input-container" >
        <input
          ref={inputRef}
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
