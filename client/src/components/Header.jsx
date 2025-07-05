import React from 'react';
import Nav from './Nav.jsx';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Nav />
      {/* <h1>Cattlelog Management System</h1> */}
    </header>
  );
}

export default Header;
