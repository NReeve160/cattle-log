import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate(); // for programmatic redirect

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token); // Save token
        setMessage('✅ Login successful! Redirecting...');
        setTimeout(() => navigate('/home'), 1000); // Redirect to Home
      } else {
        setMessage('❌ ' + (data.error || 'Invalid credentials'));
      }
    } catch (err) {
      console.error('Login error:', err);
      setMessage('❌ Network error');
    }
  };

  return (
    <div id="login-component">
      <h1 className="title">LOGIN</h1>

      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />
        <button type="submit">LOG IN</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Login;
