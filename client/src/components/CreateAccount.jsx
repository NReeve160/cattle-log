import React from 'react';
import { Link } from 'react-router-dom';

function CreateAccount() {
  return (
    <div id="createaccount-component">

    <h1 className="title">Create Account</h1>

    <label htmlFor="username">Username:</label>
    <input type="text" id="username" />

    <br /><label htmlFor="password">Password:</label>
    <input type="text" id="password" />

    <br /><label htmlFor="password2">Confirm Password:</label>
    <input type="text" id="password2" />

    <br /><br /><button><Link to="/login">CREATE ACCOUNT</Link></button>

    </div>
  );
}

export default CreateAccount;
