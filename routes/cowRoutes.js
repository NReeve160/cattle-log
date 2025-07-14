const express = require('express');
const router = express.Router();
const Cow = require('../models/Cow');

// Create a new cow
router.post('/', async (req, res) => {
  try {
    const cow = new Cow(req.body);
    await cow.save();
    res.status(201).json({ message: 'Cow created', cow });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all cows
router.get('/', async (req, res) => {
  try {
    const cows = await Cow.find();
    res.json(cows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a cow by ID (optional)
router.get('/:id', async (req, res) => {
  try {
    const cow = await Cow.findOne({ id: req.params.id });
    if (!cow) return res.status(404).json({ error: 'Cow not found' });
    res.json(cow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
