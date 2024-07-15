const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: '*', // Update with specific origin if needed
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
}));
app.use(bodyParser.json());

// MongoDB Connection
const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Adjust as per your MongoDB setup
  retryWrites: true,
  w: 'majority',
};

mongoose.connect(process.env.MONGO_URL, connectOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    console.error('Reason:', err.reason);
    process.exit(1); // Exit process on MongoDB connection failure
  });

// Routes
const activitiesRoutes = require('./routes/activitiesRoutes');
app.use('/api/activities', activitiesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${3000}`);
});
