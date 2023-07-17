const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create an empty array to store employee data
const employees = [];

// Ask the user for employee information
function askEmployeeInfo() {
  rl.question('Enter employee name (or type "done" to finish): ', (name) => {
    if (name.toLowerCase() === 'done') {
      saveEmployeeData();
      rl.close();
    } else {
      rl.question('Enter employee age: ', (age) => {
        rl.question('Enter employee department: ', (department) => {
          // Create an employee object
          const employee = {
            name,
            age: parseInt(age),
            department,
          };

          // Add the employee to the employees array
          employees.push(employee);

          // Ask for the next employee's information
          askEmployeeInfo();
        });
      });
    }
  });
}

// Save employee data to a file
function saveEmployeeData() {
  const jsonData = JSON.stringify(employees, null, 2);

  fs.writeFile('employee-data.json', jsonData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Employee data saved to employee-data.json');
  });
}

// Start asking for employee information
askEmployeeInfo();

  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
