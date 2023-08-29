const dotenv = require('dotenv').config();
const os = require('os');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const Variables = process.env;
console.log('Environment Variables:');
for (const key in Variables) {
  console.log(`${key}: ${Variables[key]}`);
}

function displayEnvironmentVariable(variableName) {
  const value = process.env[variableName];
  if (value) {
    console.log(`${variableName}: ${value}`);
  } else {
    console.log(`Environment variable "${variableName}" not found.`);
  }
}


console.log('\nTesting Environment Credentials:');
console.log('-------------------------------');
displayEnvironmentVariable('TEST_API_KEY');
displayEnvironmentVariable('TEST_DATABASE_URL');

console.log('\nUAT Environment Credentials:');
console.log('----------------------------');
displayEnvironmentVariable('UAT_API_KEY');
displayEnvironmentVariable('UAT_DATABASE_URL');

console.log('\nProduction Environment Credentials:');
console.log('----------------------------------');
displayEnvironmentVariable('PROD_API_KEY');
displayEnvironmentVariable('PROD_DATABASE_URL');

rl.question('Enter a environment variable name: ', (name) =>{
    displayEnvironmentVariable(name);
});
