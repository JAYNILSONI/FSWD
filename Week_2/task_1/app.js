const http = require("http");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("welcome to server");
  }

  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const formData = qs.parse(body);
      const number1 = Number(formData.number1);
      const number2 = Number(formData.number2);

      if (isNaN(number1) || isNaN(number2)) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "text/plain");
        res.end("Invalid number1 or number2 parameter");
        return;
      }

      const sum = number1 + number2;

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(`Sum: ${sum}`);
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Endpoint not found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});