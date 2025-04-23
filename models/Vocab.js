// backend/models/Vocab.js
const mongoose = require('mongoose');

// Định nghĩa schema cho từ vựng
const vocabSchema = new mongoose.Schema({
  word: { type: String, required: true },
  meaning: { type: String, required: true },
  french: { type: String, required: true },
  example: { type: String }
},{collection: "vocabs"});

// Export mô hình Vocab
module.exports = mongoose.model('vocabs', vocabSchema);
