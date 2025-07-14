document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value;
    console.log('Login received:', { username, password }); // ✅ Log it outside the fetch

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }) // ✅ Only this goes in body
      });

      const result = await res.json();

      if (res.ok) {
        localStorage.setItem('token', result.token);
        message.textContent = '✅ Login successful! Redirecting...';
        message.style.color = 'green';

        setTimeout(() => {
          window.location.href = '/OLD-HTML/home.html';
        }, 1000);
      } else {
        message.textContent = '❌ ' + (result.error || 'Invalid credentials.');
        message.style.color = 'red';
      }
    } catch (err) {
      console.error('Login error:', err);
      message.textContent = '❌ Network error.';
      message.style.color = 'red';
    }
  });
});


router.post('/register-test', async (req, res) => {
  const bcrypt = require('bcrypt');
  const User = require('../models/User');

  const username = 'test@email.com';
  const password = await bcrypt.hash('123', 10);

  try {
    const existing = await User.findOne({ username });
    if (existing) return res.json({ message: 'User already exists' });

    const user = new User({ username, password });
    await user.save();
    res.json({ message: 'Test user created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});