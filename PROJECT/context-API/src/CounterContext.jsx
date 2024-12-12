/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/context/CounterContext.js
import React , { createContext, useState, useContext } from 'react';

// Create a Context for the counter state
const CounterContext = createContext();

// Create a provider component to wrap around the app
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook to use the counter context
export const useCounter = () => useContext(CounterContext);
