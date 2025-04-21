const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// POST: Create an appointment
router.post('/', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to book appointment' });
  }
});

module.exports = router;
