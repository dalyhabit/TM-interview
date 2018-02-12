var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    var messages = [];
    request.on('data', (data) => {
      messages.push(data);
    })
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    response.writeHead(200, headers);
    response.end(JSON.stringify({request});
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
