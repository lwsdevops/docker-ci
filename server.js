var   http = require('http')
    , os = require('os')
    , reuqest = require('request')
    , url = require('url');

exports.server = http.createServer( function(req, res) {
    console.log(req.headers);
    var uri = url.parse(req.url).pathname

    if( req.method == "GET" && uri == "/" ) {
        res.writeHead(200, { 'Content-Type' : 'text/plain' });
        res.write('hostname:' + os.hostname() + '\n');
        res.end();
    } else {
        res.writeHead( 405, { 'Content-Type' : 'text/plain' });
        res.write('Fail!');
        res.end('Method Not Allowed');
    }
});
