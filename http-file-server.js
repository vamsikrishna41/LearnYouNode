const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })

  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));