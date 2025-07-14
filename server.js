const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

// ✅ Initialize express app first
const app = express();

// ✅ THEN configure middleware
app.use(cors());
app.use(express.json());

// ✅ THEN serve static files
app.use('/OLD-HTML', express.static(path.join(__dirname, 'OLD-HTML')));
app.use('/auth', express.static(path.join(__dirname, 'auth')));
app.use('/auth', express.static(path.join(__dirname, 'auth')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
const authRoutes = require('./routes/authRoutes');
const cowRoutes = require('./routes/cowRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/cows', cowRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
