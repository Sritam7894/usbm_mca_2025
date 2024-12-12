/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";

// Create the Theme Context
export const ThemeContext = createContext();

// Theme Provider component
export const ThemeProvider = ({ children }) => {
  // Load the theme from localStorage or default to light mode
  const storedTheme = localStorage.getItem("theme") || "light";
  
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    // Save theme preference to localStorage when it changes
    localStorage.setItem("theme", theme);
    
    // Apply the theme to the document body
    document.body.className = theme;
  }, [theme]);

  // Toggle function to switch between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
