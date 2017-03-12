var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('should respond with', function(done) {
    request(app).get('/').expect('hello jenkins successful!!', done);
  });
});