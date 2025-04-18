const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Email configuration (use your email provider's SMTP settings)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider (e.g., 'hotmail')
  auth: {
    user: 'your-email@gmail.com', // your email address
    pass: 'your-email-password', // your email password or app-specific password
  },
});

// POST route to handle the form submission
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com', // your email address where you want to receive the messages
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending message.');
    }
    res.status(200).send('Message sent successfully.');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
