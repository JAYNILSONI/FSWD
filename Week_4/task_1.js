const url = require('url');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to parse and display URL components
function parseURL(inputURL) {
  const parsedURL = url.parse(inputURL, true);

  console.log('Protocol:', parsedURL.protocol);
  console.log('Host:', parsedURL.host);
  console.log('Path:', parsedURL.pathname);
  console.log('Query Parameters:', parsedURL.query);
}

// Function to resolve and display absolute URL
function resolveURL(baseURL, relativePath) {
  const absoluteURL = url.resolve(baseURL, relativePath);
  console.log('Absolute URL:', absoluteURL);
}

// Get user input for the URL
rl.question('Enter a URL: ', (userURL) => {
  // Parse and display URL components
  parseURL(userURL);

  // Get user input for the base URL and relative path
  rl.question('Enter the base URL: ', (baseURL) => {
    rl.question('Enter the relative path: ', (relativePath) => {
      // Resolve and display the absolute URL
      resolveURL(baseURL, relativePath);
      rl.close();
    });
  });
});
