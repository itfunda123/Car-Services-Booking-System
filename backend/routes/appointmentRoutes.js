const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// ✅ GET: Fetch all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 }); // sorted by latest first
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

// ✅ POST: Create a new appointment
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
