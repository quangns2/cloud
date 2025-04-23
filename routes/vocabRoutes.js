// backend/routes/vocabRoutes.js
const express = require('express');
const router = express.Router();
const Vocab = require('../models/Vocab');

// Lấy tất cả từ vựng
router.get('/', async (req, res) => {
  try {
    const vocabs = await Vocab.find();
    res.json(vocabs);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Thêm từ vựng mới
router.post('/', async (req, res) => {
  const newVocab = new Vocab(req.body);
  try {
    const savedVocab = await newVocab.save();
    res.json(savedVocab);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Cập nhật từ vựng
router.put('/:id', async (req, res) => {
  try {
    const updatedVocab = await Vocab.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedVocab);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Xóa từ vựng
router.delete('/:id', async (req, res) => {
  try {
    await Vocab.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
