/* eslint-disable no-unused-vars */
// src/App.js
import React from 'react';
import { CounterProvider } from './CounterContext';
import Counter from './Counter';

const App = () => {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Global Counter App with Context API</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default App;

