/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Step2.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step2 = ({ formData, updateFormData }) => {
  const navigate = useNavigate();
  const [address, setAddress] = useState(formData.address);
  const [city, setCity] = useState(formData.city);
  const [country, setCountry] = useState(formData.country);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!address || !city || !country) {
      setError("Please fill in all fields.");
      return;
    }
    updateFormData({ address, city, country });
    navigate("/step3");
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <form>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
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

export default Step2;
