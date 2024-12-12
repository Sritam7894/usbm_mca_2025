/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext"; // Import the ThemeContext

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggle function from context

  return (
    <div className={`App ${theme}`}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
