var server = require('./server.js');

var start = server.server
start.listen('8080');
console.log('listening on port 8080');
