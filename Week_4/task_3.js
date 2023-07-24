const path = require('path');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if two file paths refer to the same file
function checkSameFile(path1, path2) {
  const absolutePath1 = path.resolve(path1);
  const absolutePath2 = path.resolve(path2);

  if (fs.existsSync(absolutePath1) && fs.existsSync(absolutePath2)) {
    const isSameFile = fs.statSync(absolutePath1).ino === fs.statSync(absolutePath2).ino;
    console.log('Are they the same file?', isSameFile);
  } else {
    console.log('One or both file paths are invalid.');
  }
}

// Function to extract and display the file extension from a file path
function extractFileExtension(filePath) {
  const fileExtension = path.extname(filePath);
  console.log('File Extension:', fileExtension);
}

// Get user input
rl.question('Enter the first file path: ', (path1) => {
  rl.question('Enter the second file path: ', (path2) => {
    // Check if the file paths refer to the same file
    checkSameFile(path1, path2);

    // Example usage of extractFileExtension function with the first file path
    extractFileExtension(path1);

    rl.close();
  });
});
