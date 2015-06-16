var   server = require('../server.js')
    , assert = require('assert')
    , request = require('request');

describe('server', function() {
    before( function() {
        server.server.listen(8080);
    });

    describe('/', function () {
        it('should return a 200', function(done) {
            request('http://localhost:8080', function( error, res, body ) {
                assert.equal(200, res.statusCode);
                done();
            });
        });
        it('should return a 405', function(done) {
            request({ uri: 'http://localhost:8080', method: 'HEAD' }, function( error, res, body ) {
                assert.equal(405, res.statusCode);
                done();
            });
        });
    });

    describe('/es-healthcheck' function() {
      it('integration es-healthcheck', function(done) {
        request({ uri: 'http://localhost:8080/es-healthcheck', method: 'GET' }, function( error, res, body ) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    after( function() {
        server.server.close();
    });
});
