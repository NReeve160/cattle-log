const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Environment secret key (set this in .env)
const JWT_SECRET = process.env.JWT_SECRET;

// Register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Replace with your real login logic or DB check
  if (username === 'test@example.com' && password === '1234') {
    return res.json({ token: 'fake-jwt-token' });
  }

  res.status(401).json({ error: 'Invalid credentials' });
});

router.post('/register-test', async (req, res) => {
  try {
    const username = 'test@email.com';
    const password = await bcrypt.hash('123', 10);

    const existing = await User.findOne({ username });
    if (existing) {
      return res.json({ message: 'User already exists' });
    }

    const user = new User({ username, password });
    await user.save();

    res.json({ message: 'Test user created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;