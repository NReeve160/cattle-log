import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <ul><Link to="/"><img src="../src/cattlelog.png" alt="cattlelog logo" /></Link></ul>
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/reports">Reports</Link></ul>
        <ul><Link to="/login">Login</Link></ul>
    </nav>
  );
}

export default Nav;
