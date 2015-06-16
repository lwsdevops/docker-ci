var   http = require('http')
    , os = require('os')

exports.server = http.createServer( function(req, res) {
    console.log(req.headers);
    if( req.method == "GET" ) {
        res.writeHead(200, { 'Content-Type' : 'text/plain' });
        res.write('hostname:' + os.hostname() + '\n');
        res.end();
    } else {
        res.writeHead( 405, { 'Content-Type' : 'text/plain' });
        res.write('Fail!');
        res.end('Method Not Allowed');
    }
});
