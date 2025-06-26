import React from 'react';

function CreateAccount() {
  return (
    <>
    <div>

    <h1 class="title">Create Account</h1>

    <label for="username">Username:</label>
    <input type="text" id="username" />

    <label for="password">Password:</label>
    <input type="text" id="password" />

    <label for="password2">Confirm Password:</label>
    <input type="text" id="password2" />

    <button><a href="home.html">CREATE ACCOUNT</a></button>

    </div>
    </>
  );
}

export default CreateAccount;
