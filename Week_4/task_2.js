const url = require('url');
const querystring = require('querystring');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to extract and display key-value pairs from a query string
function extractQueryParams(inputURL) {
  const parsedURL = url.parse(inputURL);
  const queryParams = querystring.parse(parsedURL.query);

  console.log('Query Parameters:');
  for (const key in queryParams) {
    console.log(key + ':', queryParams[key]);
  }
}

// Get user input
rl.question('Enter a URL with a query string: ', (userURL) => {
  extractQueryParams(userURL);
  rl.close();
});
