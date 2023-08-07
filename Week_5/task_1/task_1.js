const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// In-memory database (using an array to store the data)
let data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// CRUD operations

// Get all data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Get a single data by ID
app.get('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// Create new data
app.post('/api/data', (req, res) => {
  const newItem = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
  };
  data.push(newItem);
  res.json(newItem);
});

// Update data by ID
app.put('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    data[index].name = req.body.name;
    data[index].email = req.body.email;
    res.json(data[index]);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// Delete data by ID
app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    res.json({ message: 'Data deleted successfully' });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
