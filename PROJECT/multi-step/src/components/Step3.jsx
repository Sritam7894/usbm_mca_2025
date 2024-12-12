/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Step3.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Step3 = ({ formData }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Form submitted!");
    // You can replace this with actual form submission logic (e.g., an API call).
  };

  return (
    <div>
      <h2>Step 3: Review and Submit</h2>
      <div>
        <h3>Personal Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p>Address: {formData.address}</p>
        <p>City: {formData.city}</p>
        <p>Country: {formData.country}</p>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
