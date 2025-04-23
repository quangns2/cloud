// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Tạo app Express
const app = express();

// Cấu hình middlewares
app.use(cors());
app.use(bodyParser.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Định nghĩa routes
const vocabRoutes = require('./routes/vocabRoutes');
app.use('/api/vocab', vocabRoutes);

// Khởi động server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
