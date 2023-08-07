const express = require('express');
const { check, validationResult } = require('express-validator');
const Joi = require('joi');

const app = express();
app.use(express.json());

// Joi schema for form data validation
const formDataSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).required(),
});

// Sample API endpoint for validating form data
app.post('/api/form', [
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Invalid email'),
  check('age').isInt({ min: 18 }).withMessage('Age must be at least 18'),
], (req, res) => {
  const validatorErrors = validationResult(req);
  const joiResult = formDataSchema.validate(req.body);

  if (!validatorErrors.isEmpty()) {
    return res.status(400).json({ errors: validatorErrors.array() });
  }

  if (joiResult.error) {
    return res.status(400).json({ error: joiResult.error.details[0].message });
  }

  // If both validation methods pass, process the data
  const formData = req.body;
  // ... Your logic to process the form data ...

  res.json({ message: 'Form data submitted successfully!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});