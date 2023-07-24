const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Function to extract directory name and base name from a file path
function extractDirAndBaseName(filePath) {
  const dirname = path.dirname(filePath);
  const basename = path.basename(filePath);
  return { dirname, basename };
}

// Function to check if the file path exists
function checkFileExists(filePath) {
  return new Promise((resolve, reject) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        resolve({ exists: false, message: 'Error: File does not exist' });
      } else {
        resolve({ exists: true, message: 'Success: File exists' });
      }
    });
  });
}

// Endpoint to process the file path and return the results
app.get('/process', (req, res) => {
  const filePath = req.query.filePath;

  const { dirname, basename } = extractDirAndBaseName(filePath);
  checkFileExists(filePath)
    .then(result => {
      const { exists, message } = result;
      res.json({ dirname, basename, exists, message });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ message: 'An error occurred' });
    });
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
