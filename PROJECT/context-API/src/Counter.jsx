/* eslint-disable no-unused-vars */
// src/components/Counter.js
import React from 'react';
import { useCounter } from './CounterContext';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
