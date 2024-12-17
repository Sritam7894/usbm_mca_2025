import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard. You are logged in!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
