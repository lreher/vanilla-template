var http = require('http');

module.exports = function(router) {
  var server = http.createServer(router);

  server.listen(8080);

  return server;
}