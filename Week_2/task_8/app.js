const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
const path = require('path');

function createFileStructure(parentPath, structure) {
  if (Array.isArray(structure)) {
    structure.forEach((item) => {
      const itemPath = path.join(parentPath, item);
      fs.mkdirSync(itemPath, { recursive: true });
    });
  } else if (typeof structure === 'object') {
    Object.entries(structure).forEach(([dirName, subStructure]) => {
      const dirPath = path.join(parentPath, dirName);
      fs.mkdirSync(dirPath, { recursive: true });
      createFileStructure(dirPath, subStructure);
    });
  }
}

// Example JSON file structure
const fileStructure = {
  folder1: ['file1.txt', 'file2.txt'],
  folder2: {
    subfolder1: ['file3.txt'],
    subfolder2: {
      subsubfolder: ['file4.txt'],
    },
  },
};

// Specify the root directory where the structure should be created
const rootDirectory = './my-folder';

// Create the file structure
createFileStructure(rootDirectory, fileStructure);

  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
