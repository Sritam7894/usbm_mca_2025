/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step1 from "./components/Step1.jsx";
import Step2 from "./components/Step2.jsx";
import Step3 from "./components/Step3.jsx";
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <Router>
      <div className="App">
        <h1>Multi-Step Form</h1>
        <Routes>
          <Route
            path="/"
            element={<Step1 formData={formData} updateFormData={updateFormData} />}
          />
          <Route
            path="/step2"
            element={<Step2 formData={formData} updateFormData={updateFormData} />}
          />
          <Route
            path="/step3"
            element={<Step3 formData={formData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
