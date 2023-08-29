const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Predefined admin email address
const adminEmail = 'admin@example.com';

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  // Replace with your email service configuration
  service: 'gmail',
  auth: {
    user: '21it156@charusat.edu.in',
    pass: '********',
  },
});

// Middleware for validating contact form data
const validateContactForm = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('message').notEmpty().withMessage('Message is required'),
];

// API endpoint for "Contact Us" form submission
app.post('/api/contact', validateContactForm, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Send email to admin using nodemailer
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: adminEmail,
    subject: 'Contact Us Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error.message);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully!' });
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
