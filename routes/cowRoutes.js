const express = require('express');
const router = express.Router();
const Cow = require('../models/Cow');

// ✅ Ping route FIRST
router.get('/ping', (req, res) => {
  res.json({ message: 'Cow API is alive 🐄' });
});

// ✅ Get ALL cows
router.get('/', async (req, res) => {
  try {
    const cows = await Cow.find();
    res.json(cows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get by ID LAST
router.get('/:id', async (req, res) => {
  try {
    const cow = await Cow.findOne({ _id: req.params.id });
    if (!cow) return res.status(404).json({ error: 'Cow not found' });
    res.json(cow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST new cow
router.post('/', async (req, res) => {
  try {
    const cow = new Cow(req.body);
    await cow.save();
    res.status(201).json({ message: 'Cow created', cow });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a cow by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCow = await Cow.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedCow) return res.status(404).json({ error: 'Cow not found' });

    res.json({ message: 'Cow updated', cow: updatedCow });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;
