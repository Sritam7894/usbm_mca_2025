/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);  // State to store users data
  const [loading, setLoading] = useState(true);  // State to handle loading state
  const [error, setError] = useState(null);  // State to handle errors

  // Fetch users data from the API
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data); // Set the data from the response
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError('Something went wrong!'); // Handle any errors
        setLoading(false); // Set loading to false in case of error
      });
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="App">
      <h1>User List</h1>

      {/* Display loading message while data is being fetched */}
      {loading && <p>Loading...</p>}

      {/* Display error message if there is any error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display the users in a card layout */}
      <div className="user-cards-container">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <address>
              <strong>Address:</strong>
              <br />
              {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
            </address>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
