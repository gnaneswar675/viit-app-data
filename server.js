const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors({
  origin: 'https://viit-conference.netlify.app', // no trailing slash
  methods: ['POST','GET','PUT','DELETE'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/contact', require('./routes/contact'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
