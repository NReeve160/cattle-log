import React from 'react';

function Login() {
  return (
    <>
    <div>

    <h1 class="title">LOGIN</h1>

    <label for="username">Username:</label>
    <input type="text" id="username" />

    <label for="password">Password:</label>
    <input type="text" id="password" />

    <button><a href="account.html">LOG IN</a></button>
    
    </div>
    </>
  );
}

export default Login;