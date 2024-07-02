const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Java");
});

server.listen(3000);

// To run the application, execute `node stage_one.js` in the terminal
