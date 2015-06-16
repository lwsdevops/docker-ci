var   http = require('http')
    , os = require('os')
    , request = require('request')
    , url = require('url')
    , es_ip = process.env.ELASTICSEARCH_PORT_9200_TCP_ADDR
    , es_port = process.env.ELASTICSEARCH_PORT_9200_TCP_PORT;

exports.server = http.createServer( function(req, res) {
    console.log(req.headers);
    var uri = url.parse(req.url).pathname;

    if( req.method == "GET" && uri == "/" ) {
        res.writeHead(200, { 'Content-Type' : 'text/plain' });
        res.write('hostname:' + os.hostname() + '\n');
        res.end();
    } else if ( req.method == "GET" && uri == "/es-health" ) {
        request({ uri: 'http://'+es_ip+':'+es_porti+'/health', method: 'GET' }, function( error, resp, body ) {
          if (!error) {
            res.writeHead(200, { 'Content-Type' : 'text/plain' });
            res.write(body + '\n')
          }
        });
    }
    else {
        res.writeHead( 405, { 'Content-Type' : 'text/plain' });
        res.write('Fail!');
        res.end('Method Not Allowed');
    }
});
