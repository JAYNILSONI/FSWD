const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;

    function compareFiles(file1Path, file2Path) {
      const file1 = fs.readFileSync(file1Path, 'utf8');
      const file2 = fs.readFileSync(file2Path, 'utf8');

      const fileSize1 = fs.statSync(file1Path).size;
      const fileSize2 = fs.statSync(file2Path).size;

      console.log(`File 1 size: ${fileSize1} bytes`);
      console.log(`File 2 size: ${fileSize2} bytes`);

      if (fileSize1 > fileSize2) {
        console.log('File 1 is larger');
      } else if (fileSize2 > fileSize1) {
        console.log('File 2 is larger');
      } else {
        console.log('Both files are of the same size');
      }

      const lines1 = file1.split('\n');
      const lines2 = file2.split('\n');

      const differentLines = [];

      lines1.forEach((line, index) => {
        if (line !== lines2[index]) {
          differentLines.push(index + 1);
        }
      });

      console.log('Different lines:', differentLines);
    }

    compareFiles('file1.txt', 'file2.txt');


  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
