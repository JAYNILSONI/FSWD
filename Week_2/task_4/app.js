const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  fs.readFile('student-data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    const students = data.split('\n');
    const filteredStudents = students.filter((student) => {
      const [name, cgpa] = student.split(',');
      return name.includes('MA') && parseFloat(cgpa) > 7;
    });
  
    console.log('Filtered students:', filteredStudents);
  });
  

  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
