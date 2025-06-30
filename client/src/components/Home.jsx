import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-component">
      <h1 className="title">Welcome to Cattlelog</h1>
      <p>Your comprehensive cattle management system</p>
      
      <div className="home-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <Link to="/reports" className="action-button">View Reports</Link>
          <Link to="/add-cow" className="action-button">Add New Cow</Link>
          <Link to="/add-calf" className="action-button">Add New Calf</Link>
          <Link to="/add-bull" className="action-button">Add New Bull</Link>
        </div>
      </div>
    </div>
  );
}

export default Home; 