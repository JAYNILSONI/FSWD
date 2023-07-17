const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const fs = require('fs');
  const path = require('path');
  
  function createBackup(filePath) {
    const backupFilePath = filePath + '.bak';
    fs.copyFileSync(filePath, backupFilePath);
    console.log(`Backup created: ${backupFilePath}`);
  }
  
  function restoreBackup(filePath) {
    const backupFilePath = filePath + '.bak';
    fs.copyFileSync(backupFilePath, filePath);
    console.log(`Backup restored: ${filePath}`);
  }
  
  // Example usage
  const filePath = 'file.txt';
  
  // Create a backup
  createBackup(filePath);
  
  // Restore the backup if needed
  // restoreBackup(filePath);
  

  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
