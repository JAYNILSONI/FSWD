const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
// Create a file
fs.writeFileSync('file.txt', 'Hello, World!');
console.log('File created: file.txt');

// Read a file
const content = fs.readFileSync('file.txt', 'utf8');
console.log('File content:', content);

// Append to a file
fs.appendFileSync('file.txt', '\nThis is an appended line.');
console.log('File appended.');

// Delete a file
fs.unlinkSync('file.txt');
console.log('File deleted: file.txt');

// Rename a file
fs.writeFileSync('old-file.txt', 'This is the content of the old file.');
fs.renameSync('old-file.txt', 'new-file.txt');
console.log('File renamed from old-file.txt to new-file.txt.');

// List files/directories in a directory
const directoryPath = './';
const filesAndDirs = fs.readdirSync(directoryPath);
console.log('Files and directories in', directoryPath);
filesAndDirs.forEach((fileOrDir) => {
  console.log(fileOrDir);
});

});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
