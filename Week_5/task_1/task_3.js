const express = require('express');
const multer = require('multer');

const app = express();

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// API endpoint for file upload
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // If file upload is successful, you can access the file information using req.file
  const file = req.file;
  console.log('Uploaded file:', file);

  res.json({ message: 'File uploaded successfully!', file });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
