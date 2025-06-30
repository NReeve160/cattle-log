import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div id="login-component">

    <h1 className="title">LOGIN</h1>

    <label htmlFor="username">Username:</label>
    <input type="text" id="username" />

    <br /><label htmlFor="password">Password:</label>
    <input type="text" id="password" />

    <br /><br /><button><Link to="/">LOG IN</Link></button>
    
    </div>
  );
}

export default Login;