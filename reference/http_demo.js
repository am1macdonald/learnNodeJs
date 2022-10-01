const http = require("http");
const os = require("os");
// Create server object

http
  .createServer((req, res) => {
    // write response
    res.write("Goodbye worl.");
    res.end();
  })
  .listen(8080, () =>
    console.log(`server running on: http://${os.hostname()}:8080`)
  );
