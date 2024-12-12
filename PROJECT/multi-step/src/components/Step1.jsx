/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Step1.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step1 = ({ formData, updateFormData }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(formData.name);
  const [email, setEmail] = useState(formData.email);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!name || !email) {
      setError("Please fill in all fields.");
      return;
    }
    updateFormData({ name, email });
    navigate("/step2");
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Step1;
