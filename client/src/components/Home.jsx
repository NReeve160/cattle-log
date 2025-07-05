import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-component">
      <h1 className="title">Cattlelog Management System</h1>
      
      <div className="action-buttons">
        <br /><Link to="/add-calf" className="action-button">Add New Calf</Link>
        <br /><Link to="/add-cow" className="action-button">Add New Cow</Link>
        <br /><Link to="/add-bull" className="action-button">Add New Bull</Link>
        <br /><br />
        <br /><Link to="/cow-report" className="action-button">Cow Report</Link>
        <br /><Link to="/calf-report" className="action-button">Calf Report</Link>
        <br /><Link to="/bull-report" className="action-button">Bull Report</Link>
      </div>
    </div>
  );
}

export default Home; 