const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.status(200).json({ msg: 'Message received' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
