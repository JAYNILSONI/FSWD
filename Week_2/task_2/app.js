const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader(404);
    res.end("Endpoint not found");
  });

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});